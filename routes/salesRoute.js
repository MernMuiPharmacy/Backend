const express=require('express');
const router=express.Router();
const {sell,getAllSales}=require('../controllers/sales')

router.get("/getAllSales",getAllSales);
router.post("/sell",sell);
module.exports=router;