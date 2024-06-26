const conn= require('../database/index.js');
module.exports={
    getAllStock:(cb,values)=>{
        let sql=`SELECT * FROM stock`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        });
    },
    addStock:(cb,values)=>{
        let sql=`INSERT INTO stock SET productName=?, activeIngredient=?, type=?,price=?,prescOnly=?,qty=?,expires=?,refrigerate=?,providers=?,productImage=?`
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        });
    },
    updateStock:(cb,values)=>{
        let sql=`UPDATE stock SET productName=?, activeIngredient=?, type=?,price=?,prescOnly=?,qty=?,expires=?,refrigerate=?,providers=?,productImage=?  WHERE productName=?`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        });
    },
    deleteStock:(cb,values)=>{
        let sql=`DELETE FROM stock WHERE productName=?`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        });
    }

}