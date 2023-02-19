const app = Vue.createApp({
    data() {
        return {
            // セール対象のチェック(true: 有り、false: 無し)
            check1: false,
            // 送料無料のチェック(true: 有り、false: 無し)
            check2: false,
            // ソート順(0: 未選択、1: 標準、2: 安い順)
            order: 0,
            // 商品リスト
            list: [
                {name: 'Michael<br>スマホケース', price: 1980, image: 'images/01.jpg', shipping: 0, isSale: true},
                {name: 'Raphael<br>スマホケース', price: 3980, image: 'images/02.jpg', shipping: 0, isSale: true},
                {name: 'Gabriel<br>スマホケース', price: 2980, image: 'images/03.jpg', shipping: 240, isSale: true},
                {name: 'Uriel<br>スマホケース', price: 1580, image: 'images/04.jpg', shipping: 0, isSale: true},
                {name: 'Ariel<br>スマホケース', price: 2580, image: 'images/05.jpg', shipping: 0, isSale: false},
                {name: 'Azrael<br>スマホケース', price: 1280, image: 'images/06.jpg', shipping: 0, isSale: false}
            ]
        }
    },
    computed: {
        filteredList() {
            // コンポーネントのインスタンスを取得
            const app = this;
            // 商品の絞り込み
            const filteredList = this.list.filter(function(item){
                // 表示判定 (true: 表示する、false: 表示しない)
                let show = true;
                // 検索条件：セール対象チェックあり
                if (app.check1) {
                    if (!item.isSale) {
                        show = false;
                    }
                }
                // 検索条件：送料無料チェックあり
                if (app.check2) {
                    if (item.shipping !== 0) {
                        show = false;
                    }
                }
                // 表示判定を返す
                return show
            });
            // 商品の並べ替え
            filteredList.sort(function(a,b){
                // 「標準」が選択されている場合
                if (app.order === 1) {
                    // 元のlistと同じ順番なので何もしない
                    return 0;
                }
                // 「安い順」が選択されている場合
                else if (app.order === 2){
                    // 価格が安い順にソート
                    return a.price - b.price
                }
            });
            // 商品リストを返す
            return filteredList;
        }
    }
})
app.config.globalProperties.$filters = {
    //　数値を通貨書式「#,###,###」に変換するフィルター
    number_format(val) {
        return val.toLocaleString();
    }
}
const vm = app.mount('#app');