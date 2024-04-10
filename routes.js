const express = require('express');
const router = express.Router();
const controller = require('./controller');
const verifyToken = require('./middleware'); 



router.get('/login', controller.login);
router.post('/addUser', verifyToken, controller.addUser);
router.post('/addProduct', verifyToken, controller.addProduct); 
router.get('/editProduct', verifyToken, controller.editProduct); 
router.get('/deleteProduct', verifyToken, controller.deleteProduct); 
router.get('/getProduct', verifyToken, controller.getProduct);










module.exports = router;
