const express=require('express');
const router=express.Router();
const {addDeletion,deleteDeletion,seeDeletions}=require('../controllers/deletedstock');


router.get("/seeDeletions",seeDeletions);
router.post("/addDeletion",addDeletion);

router.post('/deleteDeletion',deleteDeletion);

module.exports=router