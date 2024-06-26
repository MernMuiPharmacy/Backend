const express=require('express');
const router=express.Router();
const {register,verifyCode,login,getUser,logout,modifyPass,getAllUsers,changeRole, insertThroughManager, updateThroughManager, removeThroughManager}=require('../controllers/staff');


router.post('/register',register);
router.post('/verify',verifyCode);
router.post('/login',login);
router.get('/logout',logout);
router.get('/getUser',getUser);
router.get('/getAllUsers',getAllUsers);
router.put('/updatePass',modifyPass);
router.put('/updateThroughManager',updateThroughManager)
router.put('/changeRole',changeRole);
router.post('/insertThroughManager',insertThroughManager);
router.post('/removeThroughManager',removeThroughManager);

module.exports=router