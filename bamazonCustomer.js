let mysql = require("mysql");
let inquirer = require("inquirer");
let colors = require("colors");
// create the connection information for the sql database
let connection = mysql.createConnection({
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
    customerOrder();


});

function customerOrder() {
    let choiceArray = [];

    console.log("Retrieving Results... ")
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        for (let i = 0; i < res.length; i++) {
            
            console.log("ID: #" + res[i].item_id + "||" + "Item: ".green + res[i].name.brightCyan + "||" +
                "Price:".yellow + "$" + res[i].price + " " + res[i].quantity);
        }
        inquirer
            .prompt([{
                    name: "idAnswer",
                    type: "rawlist",
                    choices: function () {

                        for (let i = 0; i < res.length; i++) {
                            choiceArray.push(res[i].item_id);
                        }
                        return choiceArray;
                    },
                    message: "What item by ID# would you like to purchase?"
                },
                {
                    name: "newQuantity",
                    type: "input",
                    message: "How many would you like of this item?"
                },

            ])
            .then(function (answer) {

                let newOrder = parseInt(answer.idAnswer);
                let orderAmount = parseInt(answer.newQuantity);
                
                console.log("Item ID#: " + newOrder + "  Amount Ordered: " + orderAmount);
                
                for (let i = 0; i < res.length; i++) {
                    let orgQuantity = res[i].quantity;
                    let newAmount = parseInt(orgQuantity - orderAmount);
                    if (newOrder === choiceArray[i]) {

                        connection.query(

                            "UPDATE products SET ? WHERE ?", [{
                                
                                    quantity: newAmount
                                },
                                {
                                    item_id: newOrder

                                }
                            ],
                            function (err, ) {
                                if (err) throw err
                            }
                        )
                    }   
                }
                shopOrDrop();
            });
    })
}
function shopOrDrop() {
    inquirer
        .prompt({
            name: "orderOrExit",
            type: "list",
            message: "Would you like to keep shopping or proceed to checkout?",
            choices: ["Checkout", "Keep Shopping"]
        })
        .then(function (answer) {
            if (answer.orderOrExit === "Keep Shopping") {
                customerOrder();
            } else if (answer.orderOrExit === "Checkout") {

                connection.end();
            }
        })

}