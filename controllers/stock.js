const stockModel=require('../model/stockModel');
module.exports={
    getAllStock:(req,res)=>{
        stockModel.getAllStock((err,results)=>{
            err?res.status(500).send(err):res.status(200).json(results);
        },[])//productName=? OR activeIngredient=? OR type=?
    },
    addStock:(req,res)=>{
        stockModel.addStock((err,results)=>{
            err?res.status(500).send(err):res.status(200).json(results);
        },[req.body.productName,req.body.activeIngredient,req.body.type,
        req.body.price,req.body.prescOnly,req.body.qty,req.body.expires,
    req.body.refrigerate,req.body.providers,req.body.productImage])//productName=?, activeIngredient=?, type=?
        //,price=?,prescOnly=?,qty=?,expires=?,refrigerate=?
        //,providers_idprovider=?
    },
    updateStock:(req,res)=>{
        stockModel.updateStock((err,results)=>{
            err?res.status(500).send(err):res.status(200).json(results);
        },[req.body.productName,req.body.activeIngredient,req.body.type,
            req.body.price,req.body.prescOnly,req.body.qty,req.body.expires,
        req.body.refrigerate,req.body.providers,req.body.productImage,req.body.prevName])
        //price=?,qty=?,expires=?  WHERE productName=?
    },
    deleteStock:(req,res)=>{
        stockModel.deleteStock((err,results)=>{
            err?res.status(500).send(err):res.status(200).json(results);
        },[req.body.productName])
    }

}
