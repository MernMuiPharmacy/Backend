const conn=require('../database/index.js');
module.exports={
    getAllSuppliers:(cb,values)=>{
    let sql=`SELECT * FROM suppliers`
    conn.query(sql,values,(err,results)=>{
        cb(err,results);
    })
    },
    AddSupplier:(cb,values)=>{
   let sql=`INSERT INTO suppliers SET companyname=? ,email=?,phoneNumber=?,providerImage=?`;
   conn.query(sql,values,(err,results)=>{
    cb(err,results);
   })
    },
    DeleteSupplier:(cb,values)=>{
        let sql=`DELETE FROM suppliers WHERE companyname=?` // please add "are you sure" prompt for misclicks
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        })

    },
    UpdateSupplier:(cb,values)=>{
        let sql=`UPDATE suppliers SET companyname=? ,email=?,phoneNumber=?,providerImage=? WHERE idprovider=?` // please add "are you sure" prompt for misclicks
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        })

    }

}