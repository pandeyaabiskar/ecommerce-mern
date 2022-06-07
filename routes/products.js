const express = require('express');
const router = express.Router();
const {returnProducts, returnSingleProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/products')

router.get("/", returnProducts)

router.get("/:productID", returnSingleProduct)
router.post('/', createProduct);

router.patch('/:productID', updateProduct);
router.delete('/:productID', deleteProduct);
module.exports = router