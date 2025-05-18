const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');


router.post('/addProduct', productController.createProduct);
router.delete('/deleteProduct/:idProduct', productController.deleteProduct);


module.exports = router;