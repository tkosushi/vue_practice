const app = Vue.createApp({
    data() {
        return {
            // 検索結果の件数
            count: 0,
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
    }
})
app.config.globalProperties.$filters = {
    //　数値を通貨書式「#,###,###」に変換するフィルター
    number_format(val) {
        return val.toLocaleString();
    }
}
const vm = app.mount('#app');