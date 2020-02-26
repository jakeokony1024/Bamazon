var mysql = require("mysql");
var inquirer = require("inquirer");
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "tomsucks12",
    database: "bamazon_db"
});
// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    afterConnection();
    connection.end();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            console.log("ID: #"+ res[i].item_id +"||"+"Item: " + res[i].product_name + "||" +
                  "Price: $" + res[i].price)
        }
    });
}