const express=require('express');
const router=express.Router();
const {AddDeletion,removeDeletion,getDeletions}=require('../controllers/deletedsuppliers');



router.get("/seeDeletions",getDeletions);
router.post("/addDeletion",AddDeletion);

router.post('/removeDeletion',removeDeletion);

module.exports=router