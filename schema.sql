DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (

    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(150) NOT NULL,
    department VARCHAR(150) NOT NULL,
    price INT NOT NULL,
    quantity INT NOT NULL
)  

INSERT INTO products (product_name, department, price, quantity)
VALUE ("headphones", "electronics", 50 , 10 );

INSERT INTO products (product_name, department, price, quantity)
VALUE ("monitor", "electronics", 150 , 5 );

INSERT INTO products (product_name, department, price, quantity)
VALUE ("drink cup", "food storage", 10 , 100 );

INSERT INTO products (product_name, department, price, quantity)
VALUE ("placemats", "household items", 5 , 100 );

INSERT INTO products (product_name, department, price, quantity)
VALUE ("bluetooth speaker", "electronics", 50 , 5 );

INSERT INTO products (product_name, department, price, quantity)
VALUE ("dining table", "furniture", 250 , 2 );

INSERT INTO products (product_name, department, price, quantity)
VALUE ("macbook pro", "electronics", 2500 , 10 );

INSERT INTO products (product_name, department, price, quantity)
VALUE ("broom", "household items", 10 , 50 );

INSERT INTO products (product_name, department, price, quantity)
VALUE ("laundry basket", "household items", 10 , 50 );

INSERT INTO products (product_name, department, price, quantity)
VALUE ("instapot", "electronics", 100 , 10 );

INSERT INTO products (product_name, department, price, quantity)
VALUE ("picture frame", "household items", 10 , 45 );

INSERT INTO products (product_name, department, price, quantity)
VALUE ("HDMI cable", "electronics", 10 , 25 );