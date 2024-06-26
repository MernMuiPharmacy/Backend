const express=require('express');
const router=express.Router();
const {wipeStockDeletions,wipeSupplierDeletions,wipeStock,wipeSuppliers,wipeSales}=require('../controllers/wipe');


router.post('/wipeStockDeletions',wipeStockDeletions);
router.post('/wipeSupplierDeletions',wipeSupplierDeletions);
router.post('/wipeStock',wipeStock);
router.post('/wipeSuppliers',wipeSuppliers);
router.post('/wipeSales',wipeSales);

module.exports=router