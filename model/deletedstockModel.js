const conn= require('../database/index.js');
module.exports={
    seeDeletions:(cb,values)=>{
        let sql=`SELECT * FROM deletedstock`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        });
    },
    addDeletion:(cb,values)=>{
        let sql=`INSERT INTO deletedstock SET productName=?, activeIngredient=?, type=?,price=?,prescOnly=?,qty=?,expires=?,refrigerate=?,deletedproviders=?,productImage=?`
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        });
    },
    // updateStock:(cb,values)=>{
    //     let sql=`UPDATE stock SET productName=?, activeIngredient=?, type=?,price=?,prescOnly=?,qty=?,expires=?,refrigerate=?,providers=?,productImage=?  WHERE productName=?`;
    //     conn.query(sql,values,(err,results)=>{
    //         cb(err,results);
    //     });
    // },
    deleteDeletion:(cb,values)=>{
        let sql=`DELETE FROM deletedstock WHERE productName=?`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        });
    }

}