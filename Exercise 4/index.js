
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const {v4: uuidv4} = require("uuid");

app.use(bodyParser.json());

//memory information products
let items = 
    [
        {
            id: uuidv4(),
            name: "Jumping rope",
            brand: "Elastomero",
            price: 4.99,
            normalPrice: 8.00,
            rating: "Rating: 4.5/5",
            image: "jumprope.jpg",
            description: "Best product for jumping like a frog.",
            category: "equipment"
        },
        {
            id: uuidv4(),
            name: "Plastic drinking bottle",
            brand: "GreenDrink",
            price: 9.99,
            normalPrice: 10.00,
            rating: "Rating: 5/5",
            image: "drinkingbottle.png",
            description: "A plastic bottle for poor people.",
            category: "utensil"
        },
        {
            id: uuidv4(),
            name: "Foam drinking bottle",
            brand: "NotSoGreenDrink",
            price: 33.33,
            normalPrice: 50.00,
            rating: "Rating: 4/5",
            image: "drinkingbottle2.png",
            description: "A plastic bottle for rich people.",
            category: "utensil"
        },
        {
            id: uuidv4(),
            name: "Foam drinking bottle with cover",
            brand: "NotSoGreenDrink",
            price: 40.00,
            normalPrice: 55.00,
            rating: "Rating: 4/5",
            image: "drinkingbottle2.png",
            description: "A plastic bottle for rich people.",
            category: "utensil"
        }
    ]

    //Clients database
    let clients = 
    [
        {
            id: uuidv4(),
            name: "Client 1",
            age: 25,
            adress: "St Villa Sesamo, 14",
            phone: "9538590",
            invoices: [
                {
                    id: uuidv4(),
                    products: "Foam drinking bottle",
                    totalSum: 50.00
                },
                {
                    id: uuidv4(),
                    products: "Foam drinking bottle",
                    totalSum: 33.33
                }
            ]
        },
        {
            id: uuidv4(),
            name: "Client 2",
            age: 92,
            adress: "Limankatu, 70",
            phone: "9867582",
            invoices: [
                {
                    id: uuidv4(),
                    products: "Plastic drinking bottle",
                    totalSum: 9.99
                }
            ]

        },
        {
            id: uuidv4(),
            name: "Client 3",
            age: 40,
            adress: "Tv 9, 5, Ap 2",
            phone: "9328567",
            invoices: [
                {
                    id: uuidv4(),
                    products: "Jumping rope",
                    totalSum: 4.99
                }
            ]
        }
    ]

app.get('/products/:category', (req, res) => { //filter by brand
        const result = items.filter(d => d.category === req.params.category);
        console.log(result);
        res.json(result);
})

app.get('/products/:brand', (req, res) => { //filter by brand
        const result = items.filter(d => d.brand === req.params.brand);
        console.log(result);
        res.json(result);
})


app.get('/products', (req, res) => { //show products
    res.json(items);
})

app.get('/products/:id', (req, res) => { //show individual product
    const result = items.find(d => d.id === req.params.id);
    res.json(result);
})

app.post('/products', (req, res) => { //create product
    console.log("Creating new product");
    console.log(req.body);
    items.push({
            id: uuidv4(),
            name: req.body.name,
            brand: req.body.brand,
            price: req.body.price,
            normalPrice: req.body.normalPrice,
            rating: req.body.rating,
            image: req.body.image, //verify
            description: req.body.description,
            category: req.body.category
    })
    res.send('Create new product');
})

app.delete('/products/:id', (req, res) => { //delete individual product
    const result = items.findIndex(d => d.id === req.params.id);
        if (result !== -1) {
            items.splice(result, 1);
            res.send('Delete product with ID --');
        }
})

app.delete('/products', (req, res) => { //delete all products
    items.splice(items[0],items.length);
    res.send('Delete all products');
})

app.put('/products/:id', (req, res) => { // modify especific product - .map(redo)
    const result = items.findIndex(d => d.id === req.params.id);
        if (result !== -1) {
            items[result].name = req.body.name;
            items[result].brand = req.body.brand;
            items[result].price = req.body.price;
            items[result].normalPrice = req.body.normalPrice;
            items[result].rating = req.body.rating;
            items[result].description = req.body.description;
            items[result].category = req.body.category;
            res.send('modify product with id --');
        }
})

app.get('/clients', (req, res) => { // show all clients
    res.json(clients);
    res.send('send info about clients');
}) 

app.post('/clients', (req, res) => { //create client
    console.log(req.body);
    clients.push({
            name: req.body.name,
            age: req.body.age,
            adress: req.body.adress,
            phone: req.body.phone,
            invoices: [{
                products: req.body.products,
                totalSum:req.body.totalSum
            }]
    })
    res.send('Create new client' + clients[clients.length - 1]);
})

app.post('/clients/:id/invoices', (req, res) => { // create invoice in client - verify unecessary empty {} - .find
    const result = clients.findIndex(d => d.id === req.params.id);
    if (result !== -1) {    
    clients[result].invoices.push({
                id: uuidv4(),
                products: req.body.products,
                totalSum: req.body.totalSum,
    })
    res.send('Create new invoice');
    }
})

app.get('/clients/:id/invoices', (req, res) => { //show all invoices from client - fix: .find
    //req.body.name
    const result = clients.findIndex(d => d.id === req.params.id);
        if (result !== -1) {
            res.json(clients[result].invoices);
        }
    /*console.log(req.body);
    res.send('send info about invoices');*/
})

app.get('/clients/:id/invoices/:id', (req, res) => { //show especific invoice from client - fix .find .filter
    console.log(req.params.id);
    for (let i=0; i<clients.length; i++) {
        const invoicesArrays = clients[i].invoices;
        const aux = invoicesArrays.findIndex(d => d.id === req.params.id);
        console.log(invoicesArrays); 
        console.log(aux);
        if (aux === 0 || aux === 1) {
            const result = invoicesArrays.findIndex(d => d.id === req.params.id);
            console.log(invoicesArrays[result]);
            res.json(invoicesArrays[result]);
        }
    }
})

app.delete('/clients/:id/invoices/:id', (req, res) => { //delete especific invoice from client - fix .find .filter
    for (let i=0; i<clients.length; i++) {
        const invoicesArrays = clients[i].invoices;
        const aux = invoicesArrays.findIndex(d => d.id === req.params.id);
        if (aux === 0 || aux === 1) {
            const result = invoicesArrays.findIndex(d => d.id === req.params.id);
            console.log(invoicesArrays[result]);
            console.log(result);
            invoicesArrays.splice(invoicesArrays[result], 1);
            res.send("Deleted");
        }
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})