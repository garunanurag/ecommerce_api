const express = require('express');
const router = express.Router();

const productsApi = require('../controllers/products_api');

router.get('/', productsApi.listProducts);
router.post('/create', productsApi.create);
router.delete('/:id', productsApi.deleteProduct);
router.post('/:id/update_quantity', productsApi.updateProduct);

module.exports = router;