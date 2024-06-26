const suppliersModel=require('../model/suppliersModel.js');
module.exports={
    getAllSuppliers:(req,res)=>{
     suppliersModel.getAllSuppliers((err,results)=>{
        err?res.status(500).send(err):res.status(200).json(results);
     },null)
    },
    AddSupplier:(req,res)=>{
     suppliersModel.AddSupplier((err,results)=>{
        err?res.status(500).send(err):res.status(200).json(results)
     },[req.body.companyname,req.body.email,req.body.phoneNumber,req.body.providerImage])
    },
    DeleteSupplier:(req,res)=>{
     suppliersModel.DeleteSupplier((err,results)=>{
        err?res.status(500).send(err):res.status(200).json(results)
     },[req.body.companyname])   
    },
    UpdateSupplier:(req,res)=>{
      suppliersModel.UpdateSupplier((err,results)=>{
         err?res.status(500).send(err):res.status(200).json(results)
      },[req.body.companyname,req.body.email,req.body.phoneNumber,req.body.providerImage,req.body.id])   
     }

}