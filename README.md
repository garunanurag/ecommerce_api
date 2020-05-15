# ecommerce_api

Setup:
1>Clone the project 

2>npm install to install all dependencies

3>start using node index.js



## API


### 1. List all products
 Method: GET
 
 URL: http://localhost:8000/products/
 
**response** 

"data": {
        "products": 
        
        [
           
                "_id": "5ebea52874a17141e8a2a76b",
                "name": " lslstop,",
                "quantity": 120
            
            
                "_id": "5ebeaefee4ef0f027815049c",
                "name": " laptop,",
                "quantity": 310
           
        ]
    
}
  
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

