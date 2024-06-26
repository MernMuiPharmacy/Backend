const deletedstockModel=require('../model/deletedstockModel');
module.exports={
    seeDeletions:(req,res)=>{
        deletedstockModel.seeDeletions((err,results)=>{
            err?res.status(500).send(err):res.status(200).json(results);
        },[])//productName=? OR activeIngredient=? OR type=?
    },
    addDeletion:(req,res)=>{
        deletedstockModel.addDeletion((err,results)=>{
            err?res.status(500).send(err):res.status(200).json(results);
        },[req.body.productName,req.body.activeIngredient,req.body.type,
        req.body.price,req.body.prescOnly,req.body.qty,req.body.expires,
    req.body.refrigerate,req.body.deletedproviders,req.body.productImage])//productName=?, activeIngredient=?, type=?
        //,price=?,prescOnly=?,qty=?,expires=?,refrigerate=?
        //,providers_idprovider=?
    },
    // updateStock:(req,res)=>{
    //     stockModel.updateStock((err,results)=>{
    //         err?res.status(500).send(err):res.status(200).json(results);
    //     },[req.body.productName,req.body.activeIngredient,req.body.type,
    //         req.body.price,req.body.prescOnly,req.body.qty,req.body.expires,
    //     req.body.refrigerate,req.body.providers,req.body.productImage,req.body.productName])
    //     //price=?,qty=?,expires=?  WHERE productName=?
    // },
    deleteDeletion:(req,res)=>{
        deletedstockModel.deleteDeletion((err,results)=>{
            err?res.status(500).send(err):res.status(200).json(results);
        },[req.body.productName])
    }

}