const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

// Define the CRUD API routes

//GET
router.get('/', productController.getAllProducts);

//GET specific one
router.get('/:id', productController.getProductById);

// POST
router.post('/', productController.createProduct);

// PUT
router.put('/:id', productController.updateProduct);

// DELETE
router.delete('/:id', productController.deleteProduct);

//DELETE ALL
router.delete('/', productController.deleteAllProducts);

//GET really specific one
router.get('/:kw', productController.getAllKWProducts);

module.exports = router;