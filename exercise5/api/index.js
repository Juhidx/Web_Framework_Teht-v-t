const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());


//#region DATABASE

let products = [
    {
        id: uuidv4(),
        ProductName: 'Seagate Portable 2TB External Hard Drive',
        IMG: 'https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg',
        Info: 'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)',
        Price: 62.99,
        RatingIMG: "Review.png",
        RatingCount: 155209,
        OfferPrice: 99.99,
        ShippingDate: 'Thu, Oct 7',
        ShippingPrice: 33.58,
        MoreChoicesPrice: 59.00,
        UsedNewCount: 5,
        AmazonCertified: false,
        BestSeller: false
    },
    {
        id: uuidv4(),
        ProductName: 'Roku Express 4K+',
        IMG: 'https://m.media-amazon.com/images/I/81mkzEPtKZL._AC_SL1500_.jpg',
        Info: 'Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable',
        Price: 38.98,
        RatingIMG: 'Review.png',
        RatingCount: 6709,
        OfferPrice: null,
        ShippingDate: 'Thu, Oct7',
        ShippingPrice: 33.70,
        MoreChoicesPrice: 37.99,
        UsedNewCount: 10,
        AmazonCertified: true,
        BestSeller: false
    },
    {
        id: uuidv4(),
        ProductName: 'Roku Streaming Stick+',
        IMG: 'https://m.media-amazon.com/images/I/71r1+BhQTnL._AC_SL1500_.jpg',
        Info: 'Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Roku Voice Remote with TV Controls',
        Price: 39.00,
        RatingIMG: 'Review.png',
        RatingCount: 97557,
        OfferPrice: 49.99,
        ShippingDate: 'Thu, Oct7',
        ShippingPrice: 33.28,
        MoreChoicesPrice: 30.00,
        UsedNewCount: 57,
        AmazonCertified: true,
        BestSeller: false
    },
    {
        id: uuidv4(),
        ProductName: 'Sceptre E248W-19203R 24',
        IMG: 'https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SL1257_.jpg',
        Info: 'Sceptre E248W-19203R 24" Ultra Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Metallic Black 2018',
        Price: 139.97,
        RatingIMG: 'Review.png',
        RatingCount: 15008,
        OfferPrice: null,
        ShippingDate: null,
        ShippingPrice: 38.35,
        MoreChoicesPrice: null,
        UsedNewCount: null,
        AmazonCertified: false,
        BestSeller: false
    },
    {
        id: uuidv4(),
        ProductName: 'Roku Ultra',
        IMG: 'https://m.media-amazon.com/images/I/71egutYJFyL._AC_SL1500_.jpg',
        Info: 'Roku Ultra | Streaming Device HD/4K/HDR/Dolby Vision with Dolby Atmos, Bluetooth Streaming, and Roku Voice Remote with Headphone Jack and Personal Shortcuts, includes Premium HDMI Cable',
        Price: 92.12,
        RatingIMG: 'Review.png',
        RatingCount: 15262,
        OfferPrice: 99.99,
        ShippingDate: 'Thu, Oct7',
        ShippingPrice: 38.56,
        MoreChoicesPrice: 79.00,
        UsedNewCount: 27,
        AmazonCertified: true,
        BestSeller: false
    },
    {
        id: uuidv4(),
        ProductName: 'Logitech C920x HD Pro Webcam',
        IMG: 'https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg',
        Info: 'Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Black',
        Price: null,
        RatingIMG: 'Review.png',
        RatingCount: 5910,
        OfferPrice: null,
        ShippingDate: null,
        ShippingPrice: null,
        MoreChoicesPrice: null,
        UsedNewCount: null,
        AmazonCertified: false,
        BestSeller: true
    },
    {
        id: uuidv4(),
        ProductName: 'WD 2TB Elements Portable External Hard Drive',
        IMG: 'https://m.media-amazon.com/images/I/71VB--jaeSL._AC_SL1500_.jpg',
        Info: 'WD 2TB Elements Portable External Hard Drive HDD, USB 3.0, Compatible with PC, Mac, PS4 & Xbox - WDBU6Y0020BBK-WESN',
        Price: 59.99,
        RatingIMG: 'Review.png',
        RatingCount: 90740,
        OfferPrice: null,
        ShippingDate: 'Thu, Oct7',
        ShippingPrice: 33.58,
        MoreChoicesPrice: 47.95,
        UsedNewCount: 23,
        AmazonCertified: false,
        BestSeller: false
    },
    {
        id: uuidv4(),
        ProductName: 'SanDisk 128GB Extreme Memory Card',
        IMG: 'https://m.media-amazon.com/images/I/815cRpgAN3L._AC_SL1500_.jpg',
        Info: 'SanDisk 128GB Extreme microSDXC UHS-I Memory Card with Adapter - Up to 160MB/s, C10, U3, V30, 4K, A2, Micro SD - SDSQXA1-128G-GN6MA',
        Price: 21.85,
        RatingIMG: 'Review.png',
        RatingCount: 238922,
        OfferPrice: null,
        ShippingDate: 'Thu, Oct7',
        ShippingPrice: 30.77,
        MoreChoicesPrice: 19.16,
        UsedNewCount: 25,
        AmazonCertified: false,
        BestSeller: true
    },
    {
        id: uuidv4(),
        ProductName: 'iPhone Charger',
        IMG: 'https://m.media-amazon.com/images/I/71m-EsCA2aL._SL1500_.jpg',
        Info: 'iPhone Charger [Apple MFi Certified] QIRUOZ 5Pack(3/3/6/6/10FT) Compatible iPhone 12Pro Max/12Pro/12/11/Pro/Xs Max/X/8 and More-Silver&White',
        Price: 12.99,
        RatingIMG: 'Review.png',
        RatingCount: 12144,
        OfferPrice: null,
        ShippingDate: null,
        ShippingPrice: null,
        MoreChoicesPrice: null,
        UsedNewCount: null,
        AmazonCertified: false,
        BestSeller: false
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
        id: uuidv4(), // Dont like this but a fast solution!
        ProductName: req.body.name,
        IMG: req.body.img,
        Info: req.body.info,
        Price: req.body.price
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