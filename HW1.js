const express = require("express")
var bodyParser = require('body-parser');
const app = express()
const Port = 3000;
const path = require('path')
var fs = require("fs");
const http = require('http')

const products =[];// file array in here

fs.readFile( __dirname + "/" + "favs.json", 'utf8', function (err, data) { // Read file using fs function
    let Jon = JSON.parse(data) // let jon read the file
    for(eachItem of Jon){ // doing eachitem to get exactly need in the file
    const data = {
      Create_at: eachItem.created_at, // get time
      Text: eachItem.text, //get text
      id: eachItem.user.id, //get user id
      name: eachItem.user.name, // get user name
      screen: eachItem.user.screen_name
    }
    products.push(data); // push it out
  }
  });

var currentId = []; // how many id read from the file

var PORT = process.env.PORT || 3000; // server

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/products', function(req, res) { //red all the create_at Text, id, name from the file. by using app.get and send
    res.send({ products: products });
});

app.post('/products', function(req, res) { // post it 
    var productName = req.body.name; //request body of name
    var productText = req.body.text; //request body of text

    currentId++; // add on currentid

    products.push({ // push the id and name from the file 
        id: currentId, 
        name: productName
    });

    res.send('Successfully created product!'); // successfully note
});

app.put('/products/:id', function(req, res) {  //save the id but update the new name.
    var id = req.params.id;
    var newName = req.body.newName; // newName

    var found = false;

    products.forEach(function(product, index) { 
        if (!found && product.id === Number(id)) { 
            product.screen = newName; //new name change to name
        }
    });

    res.send('Succesfully updated product!');
});

app.delete('/products/:id', function(req, res) { // delete app
    var id = req.params.id; //request params of id

    var found = false;

    products.forEach(function(product, index) {
        if (!found && product.id === Number(id)) { //can't found and file.id == number(id)
            products.splice(index, 1); // slice (index,1)
        }
    });

    res.send('Successfully deleted product!');
});

app.listen(PORT, function() { // linsten to get the locahost
    console.log('Server listening on ' + PORT);
});
