const salesModel=require("../model/salesModel")

module.exports={
    sell:(req,res)=>{
    salesModel.sell((err,results)=>{
        err? res.status(500).send(err):res.status(200).json(results);

    },[req.body.productname,req.body.amount])    
      
    },
    getAllSales:(req,res)=>{
        salesModel.getAllSales((err,results)=>{
            err? res.status(500).send(err):res.status(200).json(results);
        },null)
    }
    

}