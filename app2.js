new Vue({
    el: '#app-2',
    data: {
    message: 'Olá Vue!',
    products: [
        'Boots',
        'Jacket',
        'Hiking Socks'
    ],
    create () {
        fetch ('http://api.myjson.com/bins/74163')
            then(response => response.json())
            then(json => {
                this.products = json.products
            })
    }
    }
})