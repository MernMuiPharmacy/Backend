const deletedsuppliersModel=require('../model/deletedsuppliersModel.js');
module.exports={
    getDeletions:(req,res)=>{
     deletedsuppliersModel.seeDeletions((err,results)=>{
        err?res.status(500).send(err):res.status(200).json(results);
     },null)
    },
    AddDeletion:(req,res)=>{
     deletedsuppliersModel.AddDeletion((err,results)=>{
        err?res.status(500).send(err):res.status(200).json(results)
     },[req.body.idprovider,req.body.companyname,req.body.email,req.body.phoneNumber,req.body.providerImage])
    },
    removeDeletion:(req,res)=>{
     deletedsuppliersModel.removeDeletion((err,results)=>{
        err?res.status(500).send(err):res.status(200).json(results)
     },[req.body.companyname])   
    }
   

}