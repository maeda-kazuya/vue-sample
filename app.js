// new Vue({
//     //template: '<p>{{msg}}</p>',
//     el: '#app',
//     data: { msg: 'Hello, world!!!'}
// }).$mount('#app')


var items = [
    {
        name: 'Pencil',
        price: 300,
        quantity: 2
    },
    {
        name: 'Note',
        price: 400,
        quantity: 3
    }
]

var vm = new Vue({
    el: '#app',
    data: {
        items: items
    },
    computed: {
        totalPrice: function() {
            return this.items.reduce(function (sum, item) {
                return sum + (item.price * item.quantity)
            }, 0)
        },
        totalPriceWithTax: function() {
            return Math.floor(this.totalPrice * 1.1)
        }
    },
    filters: {
        numberWithDelimiter: function(value) {
            if (!value) {
                return '0'
            }

            return value.toString()
        }
    }
})


