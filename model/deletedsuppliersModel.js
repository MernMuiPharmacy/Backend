const conn=require('../database/index.js');
module.exports={
    seeDeletions:(cb,values)=>{
    let sql=`SELECT * FROM deletedsuppliers`
    conn.query(sql,values,(err,results)=>{
        cb(err,results);
    })
    },
    AddDeletion:(cb,values)=>{
   let sql=`INSERT INTO deletedsuppliers SET iddprovider=?,companyname=? ,email=?,phoneNumber=?,providerImage=?`;
   conn.query(sql,values,(err,results)=>{
    cb(err,results);
   })
    },
    removeDeletion:(cb,values)=>{
        let sql=`DELETE FROM deletedsuppliers WHERE companyname=?` // please add "are you sure" prompt for misclicks
        conn.query(sql,values,(err,results)=>{
            cb(err,results);
        })

    },
    // UpdateSupplier:(cb,values)=>{
    //     let sql=`UPDATE suppliers SET companyname=? ,email=?,phoneNumber=?,providerImage=? WHERE idprovider=?` // please add "are you sure" prompt for misclicks
    //     conn.query(sql,values,(err,results)=>{
    //         cb(err,results);
    //     })

    // }

}