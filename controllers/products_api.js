const Product = require('../models/product');

module.exports.listProducts = async function(req, res){
    try{
        //find all products and select only the name and quantity fields
        let products = await Product.find({}).select('name quantity');
        return res.status(200).json({
            data:{
                products: products
            }
        });
    }catch(err){
        return res.status(500).json({
            data:{},
            message: "Internal server Error"
        });
    } 
}

module.exports.create = async function(req, res){
    try{
        let product = await Product.create({
            name: req.body.name,
            quantity: parseInt(req.body.quantity)
        });

        product = await Product.findById(product._id).select('name quantity');
        return res.status(200).json({
            data:{
                product: product
            }
        });
    }catch(err){
        return res.status(500).json({
            data:{},
            message: "Internal server Error"
        });
    }
}

module.exports.deleteProduct = async function(req, res){
    try{
        await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            data:{
                message: "product deleted"
            }
        });
    }catch(err){
        return res.status(500).json({
            data:{},
            message: "Internal server Error"
        });
    } 
}

module.exports.updateProduct = async function(req, res){
    try{
        //find the product and update the qunatity
        let product = await Product.findById(req.params.id);
        product.quantity += parseInt(req.body.number);
        product.save();

        return res.status(200).json({
            data:{
                product: product
            },
            message: "updated successfully"
        });
    }catch(err){
        return res.status(500).json({
            data:{},
            message: "Internal server Error"
        });
    } 
}