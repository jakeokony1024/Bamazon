var mysql = require("mysql");
var inquirer = require("inquirer");
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",  
    port: 3306, 
    user: "root",
    password: "tomsucks12",
    database: "bamazon_db"
});
// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the function after the connection is made to prompt the user
    afterConnection();

});

function afterConnection() {

    console.log("Retrieving Results... ")
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        for (let i = 0; i < res.length; i++) {
            console.log("ID: #" + res[i].item_id + "||" + "Item: " + res[i].product_name + "||" +
                "Price: $" + res[i].price);
        }
        inquirer
            .prompt([{
                    name: "idAnswer",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < res.length; i++) {
                            choiceArray.push(res[i].item_id);
                        }
                        return choiceArray;
                    },
                    message: "What item ID would you like to purchase?"
                },
                {
                    name: "newQuantity",
                    type: "input",
                    message: "How many would you like of this item?"
                },

            ])
            .then(function (answer) {
                let newOrder = answer.idAnswer;
                let orderAmount = answer.newQuantity;
                console.log("Item ID#: " + newOrder + "  Amount Ordered: " + orderAmount);
                if 
            });
    })

    connection.end();

};