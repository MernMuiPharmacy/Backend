const express=require('express');
const router=express.Router();
const {getAllStock,addStock,updateStock,deleteStock}=require('../controllers/stock');


router.get("/getAllStock",getAllStock);
router.post("/addStock",addStock);
router.put("/updateStock",updateStock);
router.post('/deleteStock',deleteStock)

module.exports=router