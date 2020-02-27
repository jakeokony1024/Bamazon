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
    afterConnection();

});

function afterConnection() {
    let choiceArray = [];
    let newOrder;
    let orderAmount;
    console.log("Retrieving Results... ")
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        for (let i = 0; i < res.length; i++) {
            console.log("ID: #" + res[i].item_id + "||" + "Item: ".green + res[i].product_name.brightCyan + "||" +
                "Price:".yellow +  "$" + res[i].price);
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
                let newOrder = answer.idAnswer;
                let orderAmount = answer.newQuantity;
                console.log("Item ID#: " + newOrder + "  Amount Ordered: " + orderAmount);
                
                if(newOrder in choiceArray){
                    console.log("Ordering item. Updating Quantity")
                }else{
                    console.log()
                }
                
            });
    })

    connection.end();

};

// function updateProduct(){

//     let query = connection.query(
//         "UPDATE products SET ? WHERE ?",[
//             {
//                 quantity: -1
//             },
//             {
//                 item_id: idAnswer
//             }
//         ],
//         function (err){
//             if(err)throw err
//         }
//     )
// }