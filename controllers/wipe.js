const wipeModel=require('../model/wipeModel');
module.exports={
   
    wipeStockDeletions:(req,res)=>{
        wipeModel.wipeFromStockDeletions((err,results)=>{
            err?res.status(500).send(err):res.status(200).json(results);
        },[req.body.productName])
    },
    wipeSupplierDeletions:(req,res)=>{
        wipeModel.wipeFromSupplierDeletions((err,results)=>{
            err?res.status(500).send(err):res.status(200).json(results);
        },[req.body.companyname])
    },
    wipeStock:(req,res)=>{
        wipeModel.wipeFromStock((err,results)=>{
            err?res.status(500).send(err):res.status(200).json(results);
        },[req.body.productName])
    },
    wipeSuppliers:(req,res)=>{
        wipeModel.wipeFromSuppliers((err,results)=>{
            err?res.status(500).send(err):res.status(200).json(results);
        },[req.body.companyname])
    },
    wipeSales:(req,res)=>{
        wipeModel.wipeFromSales((err,results)=>{
            err?res.status(500).send(err):res.status(200).json(results);
        },[req.body.productName])
    }

}