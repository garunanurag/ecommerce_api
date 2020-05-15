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

 {
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
  
  x-www-form-urlencoded format
 
 
### 3. Delete a product  
 Method: DELETE
 
 URL: http://localhost:8000/products/:id
 
 
  
### 4. Update a product
  Method: POST
  
  URL: http://localhost:8000/products/:id/update_quantity
  
    Request format:
    {
    quantity: 200
    }
  
  
**response**


    {
        "product": 
        
            "_id": "5ebeaefee4ef0f027815049c",
            "name": " laptop,",
            "quantity": 310,
            "createdAt": "2020-05-15T15:02:22.136Z",
            "updatedAt": "2020-05-15T15:10:37.499Z",
            "__v": 0
        
    
    "message": "updated successfully"
}


x-www-form-urlencoded format

