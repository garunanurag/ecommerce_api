# ecommerce_api

Setup:
1>Clone the project 
2>npm install to install all dependencies
3>start using node index.js



## API


### 1. List all products
 Method: GET
 
 URL: http://localhost:8000/products/
 
  
### 2. Add a product
  Method: POST
  
  
  URL: http://localhost:8000/products/create
  
  Request format:
    product: {
    name: laptop,
    quantity: 10
  }
  
  provide the two fields along with their values in the body in x-www-form-urlencoded format
 
 
### 3. Delete a product  
 Method: DELETE
 
 URL: http://localhost:8000/products/:id
 
 
  
### 4. Update a product
  Method: POST
  
  URL: http://localhost:8000/products/:id/update_quantity
    Request format:
    {
    quantity: 10
  }
  provide the quantity value in the body in x-www-form-urlencoded format

