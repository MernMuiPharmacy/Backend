const express=require('express');
const router=express.Router();
const {getAllSuppliers,AddSupplier,DeleteSupplier,UpdateSupplier}=require('../controllers/suppliers');




router.get("/getAllSuppliers",getAllSuppliers);
router.post("/AddSupplier",AddSupplier);
router.post("/DeleteSupplier",DeleteSupplier);
router.put("/UpdateSupplier",UpdateSupplier);

module.exports=router