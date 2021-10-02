const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());


//#region DATABASE

let products = [
    {
        id: uuidv4(),
        name: 'Test',
        manufacturer: 'Juho Salonoja',
        category: 'Juhon tuotteet',
        description: 'Tuote jonka juho teki',
        price: 100
    },
    {
        name: 'Not',
        manufacturer: 'Eerika',
        category: 'Tuote eerikan'
    }
]

let users = [
    {
        id: uuidv4(),
        name: 'Juho',
        age: '29',
        phoneNumber: '0004440004',
        email: 'joku@joku.joku',
        address: 'Jossain',
        city: 'Oulu',
        purchasesSum: 0,
        purchases: [
        ]
    }
]

//#endregion DATABASE


app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send('This is an API for creating, deleting and getting products, users and user invoices!');
})


//#region PRODUCT handling

// Gets products
app.get('/products', (req, res) => {
    res.json(products);
})

// Gets a product by name or id
app.get('/product/:value', (req, res) => {
    let product = products.find(product => product.name.toLowerCase() === req.params.value.toLowerCase() ||
        product.id === req.params.value);

    if(product !== undefined) {
        res.json(product);
    } else {
        res.send('Product not found!')
    }
})

// Returns a product based on search (name, manufacturer, category)
app.post('/product', (req, res) => {
    let searchResult = products.filter(product => {
        return product.name.toLowerCase().indexOf(req.body.name.toLowerCase()) !==-1 &&
        product.manufacturer.toLowerCase().indexOf(req.body.manufacturer.toLowerCase()) !==-1 &&
        product.category.toLowerCase().indexOf(req.body.category.toLowerCase()) !==-1
    });

    if(searchResult.length > 0) {
        res.json(searchResult);
    } else if(searchResult.length == 0) {
        res.send('No products found!');
    }
})

// Modifies a product
app.put('/product/:id', (req, res) => {
    const index = products.findIndex(product => product.id === req.params.id);

    if(index !== -1) {
        req.body.name ? products[index].name = req.body.name : null;
        req.body.manufacturer ? products[index].manufacturer = req.body.manufacturer: null;
        req.body.category ? products[index].category  = req.body.category: null;
        req.body.description ? products[index].description  = req.body.description: null;
        req.body.price ? products[index].price = req.body.price: null;
        res.json('Product modified: ' + products[index].name);
    } else {
        res.send('Product not found!');
    }
})

// Creates a new product
app.put('/product', (req, res) => {
    products.push({
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price
    })
    res.json('New dog created!');
})

// Deletes a product
app.delete('/product/:id', (req, res) => {
    const index = products.findIndex(product => product.id === req.params.id);
    
    if(index !== -1) {
        products.splice(index, 1);
        res.send(`Product deleted with id: ${req.params.id} succesfully!`);
    } else {
        res.send('Product could not be deleted. Product not found!');
    }
})

//#endregion PRODUCT handling


//#region USER

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
})

// Get user with name or id
app.get('/user/:value', (req, res) => {
    let user = users.find(user => user.name.toLowerCase() === req.params.value.toLowerCase() ||
    user.id === req.params.value);
    
    if(user !== undefined) {
        res.json(user);
        console.log(req.body.value);
    } else {
        res.send('NO such user found!');
        console.log(req.params.value);
    }
})

// Add a new user
app.put('/user', (req, res) => {
    users.push({
        id: uuidv4(),
        name: req.body.name,
        age: req.body.age,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        purchasesSum: 0,
        purchases: []
    })
    res.send(`New user ${req.body.name} created`);
})

// Delete a user
app.delete('/user/:id', (req, res) => {
    const index = users.findIndex(user => user.id === req.params.id);

    if(index !== -1) {
        users.splice(index, 1);
        res.send(`User deleted with id: ${req.params.id} succesfully!`);
    } else {
        res.send('No such user found!');
    }
})

//#endregion USER


//#region PURCHASE and INVOICE handling

// Buy a product for user
app.put('/purchase', (req, res) => {
    let index = users.findIndex(user => user.id === req.body.userId);
    if(index !== -1) {
        let productBought = products.find(product => product.name === req.body.productName);
        users[index].purchases.push({
            id: uuidv4(),
            name: productBought.name,
            price: productBought.price
        });
        users[index].purchasesSum += productBought.price;
        res.send(`Product bought: ${req.body.productName}`);
    } else {
        res.send('Could not purchase, user not found!');
    }
    
})

// Get user invoices
app.get('/invoices/:userID', (req, res) => {
    let index = users.findIndex(user => user.id === req.params.userID);
    if(index !== -1) {
        if(users[index].purchases.lenght !== 0) {
            res.json(users[index].purchases);
        } else {
            res.send('User has no invoices!')
        }  
    } else {
        res.send('Invoices not found, user not found!')
    }
})

// Get newest user invoice
app.get('/invoice/:userID', (req, res) => {
    let index = users.findIndex(user => user.id === req.params.userID);
    if(index !== -1) {
        if(users[index].purchases.lenght !== 0) {
            let invoiceIndex = users[index].purchases.length - 1;
            res.json(users[index].purchases[invoiceIndex]);
        } else {
            res.send('User has no invoices!')
        }  
    } else {
        res.send('Invoice not found, user not found!');
    }
})


// Get invoice by ID. Need userID and invoiceID
app.put('/invoice', (req, res) => {
    let userIndex = users.findIndex(user => user.id === req.body.userID);
    if(userIndex !== -1) {
        let invoiceIndex = users[userIndex].purchases.findIndex(invoice => invoice.id === req.body.invoiceID);
        if(invoiceIndex !== -1) {
            res.json(users[userIndex].purchases[invoiceIndex]);
        } else {
            res.send(`No such invoice found on user: ${req.body.userID}`);
        }
    } else {
        res.send('No such user found!');
    }
})

// Delete invoice by ID. Need UserID and invoiceID
app.delete('/invoice', (req, res) => {
    let userIndex = users.findIndex(user => user.id === req.body.userID);
    if(userIndex !== -1) {
        let invoiceIndex = users[userIndex].purchases.findIndex(invoice => invoice.id === req.body.invoiceID);
        if(invoiceIndex !== -1) {
            users[userIndex].purchases.splice(invoiceIndex, 1);
            res.send(`Invoice ${req.body.invoiceID} deleted succesfully!`);
        } else {
            res.send(`No such invoice found on user: ${req.body.userID}`);
        }
    } else {
        res.send('No such user found!');
    }
})

// Delete user invoices
app.delete('/invoices/:id', (req, res) => {
    let index = users.findIndex(user => user.id === req.param.id);
    if(index !== -1) {
        users[index].purchases.lenght = 0;
    } else {
        res.send('User not found!');
    }
})

//#endregion PURCHASE and INVOICE handling