const express = require('express')
const app = express()

const products = [{
        id: 1,
        name: "Iphone 13 pro max",
        category: 9000,
        image: "",
        stars: 4,
        review: "This product is great"
    },
    {
        id: 2,
        name: "Samsung",
        category: 9000,
        image: "",
        stars: 4,
        review: "This product is great"
    }
]

const customers = [{
        id: 1,
        name: "Osam Caleb",
        gender: "male"
    },
    {
        id: 2,
        name: "Nora Robinson",
        gender: "female"
    },
    {
        id: 2,
        name: "John doe",
        gender: "male"
    }
]

app.get('/', function(req, res) {
    res.json({ message: "How are you" })
})

app.get('/products', function(req, res) {
    res.json(products)
})
cms
app.get('/customers', function(req, res) {
    res.json(customers)
})

app.get('/customers/:customerID', function(req, res) {
    const { customerID } = req.params;
    console.log(`The customer ID is ${customerID}`)
    res.json(customerID - 1)
})

app.listen(3000)