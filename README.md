# Bamazon

This is a mock ordering system application that strickly CL based. Once opened the user is given a list of current products available, as well as the quantity and price of the items. The user is allowed to choose a product to order, and place said order. Once placing the order, the database is updated, and the new quantity is refelected in the terminal. 

The user can then make the choice to keep shopping, or to leave, if keep shopping is chosen, the ordering process is repeated, with the updated amounts for each item. If an order is greater than the quantity available, the user is given an error message and directed to chose an amount that is within the quantity available. 

# Tech Used
This application makes use of:
*Node.js
*inquirer.js
*Colors npm package
*MySQL database 

Below is a list of the next steps needed to complete the application fully. 

-Collect prices from amounts ordered(place them in an array), add all prices together(.Math function), and then return the       total amount(console.log). 

-Create a function that places the order (this is where prices can be dealt with)
    
-Total will be displayed throughout process. 

