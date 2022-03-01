# --------------------------------------------------RESTful API-----------------------------------------------
# HW1.js
## Installation

```bash
$ npm install express
```
```js
const express = require("express")
const app = express()
const Port = 3000;

app.get('/products', function(req, res) { {
  res.send({ products: products });
});

app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});
```
This function using get and send method. For the app listen it does get the server from the localhost.

```js
var fs = require("fs");
fs.readFile( __dirname + "/" + "favs.json", 'utf8', function (err, data) { 
    let Jon = JSON.parse(data) 
    const data = {
      Create_at: eachItem.created_at, 
      Text: eachItem.text, 
      id: eachItem.user.id, 
      name: eachItem.user.name, 
      screen: eachItem.user.screen_name
    }
    products.push(data); 
  }
  });
  ```
Function called file favs.json and read by name, text, id, time, screen_name by using eachIeam method.

```js
app.post('/products', function(req, res) { // post it 
    var productName = req.body.name;
    var productText = req.body.text;

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
app.delete('/products/:id', function(req, res) {
    var id = req.params.id;

    var found = false;

    products.forEach(function(product, index) {
        if (!found && product.id === Number(id)) {
            products.splice(index, 1);
        }
    });

    res.send('Successfully deleted product!');
});
```
If We know Read file and get localhost then we need to do something to post and put items to the website.
   * post() is a request method supported by HTTP used by the World Wide Web
   * put() function routes the HTTP PUT requests to the specified path with the specified callback functions
   * res.send() function basically sends the HTTP response
   * forEach() is an array function from Node. js that is used to iterate over items in a given array
   * delete()  removes a property from an object
   

#index.html
```js
<!DOCTYPE html>
<html>
<head>
    <title>REST APIs</title>
</head>
<body>
    <h1>AJAX API Learning</h1>
    <form id="create-form">
        <input type="text" id="create-input">
        <button>Search ID</button>
    </form>
    
    <hr>
    <table>
        <thead>
            <tr>
                <button id="get-id">ID&USER</button>
                <th>ID</th>
                <th>Name</th>
                <th>New Name</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    <button id="get-text">TEXT&DATE</button>
    <script src="jquery.js"></script>
    <script src="scripts.js"></script>
</body>
</html>
```
* Create a tittle to show up on the website just call h1
* Need a form to enter alphabest or number form id ="create-form"
   * input type ="text or number" id="create-input"
* Also need a Button by using button above.

# package-lock

 package-lock json is automatically generated for any operations where npm modifies either the node_modules tree, or package. json
 
 ```js
 "name": "ajax-api-tutorial",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": 
```
# package.json

Let People know who create, liscen, version, title, ect.
```js
{
  "name": "ajax-api-Learning",
  "version": "1.0.0",
  "main": "jquery.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Leo Doan",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.15.0",
    "ejs": "^3.1.6",
    "express": "^4.13.4",
    "inquirer": "^8.2.0"
  },
  "description": ""
}
```

# scripts.js
This file also help to create the button, print out what we need and call method from index.html, 
```js
$('#get-id').on('click', function() {
        $.ajax({
            url: '/products',
            contentType: 'application/json',
            success: function(response) {
                var tbodyEl = $('tbody');

                tbodyEl.html('');

                response.products.forEach(function(product) {
                    tbodyEl.append('\
                        <tr>\
                            <td class="id">' + product.id + '</td>\
                            <td class="name">' + product.name + '</td>\
                            <td><input type="text" class="name" value="' + product.screen + '"></td>\
                            <td>\
                                <button class="update-button">UPDATE</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                });
            }
        });
    });
```
 * get-id is in the index.html it call to this file to help it show up on the localhost,
 * This scripts.js can use foreach, find, success method. Also can create the button and help print out type and class.
 * Scripts.js also call some of method from HW1.js, to get the information from the many files and wrap it up.