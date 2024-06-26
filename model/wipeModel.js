const conn= require('../database/index.js');
module.exports={

    wipeFromStockDeletions:(cb,values)=>{
        let sql=`DELETE FROM deletedstock WHERE productName=?`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        });
    },
    wipeFromSupplierDeletions:(cb,values)=>{
        let sql=`DELETE FROM deletedsuppliers WHERE companyname=?`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        });
    },
    wipeFromStock:(cb,values)=>{
        let sql=`DELETE FROM stock WHERE productName=?`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        });
    },
    wipeFromSuppliers:(cb,values)=>{
        let sql=`DELETE FROM suppliers WHERE companyname=?`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        });
    },
    wipeFromSales:(cb,values)=>{
        let sql=`DELETE FROM sales WHERE productName=?`;
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        });
    }

}