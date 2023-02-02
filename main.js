var state = { count: 0 }
var app = new Vue({
    el: '#app',
    data: {
        state: state
    }
})
state.count++
