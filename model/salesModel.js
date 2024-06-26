const db=require('../database/index')

module.exports={
    sell:(cb,values)=>{
     //remove from stock(qty= qty-1 or rather qty-res.data.qty, on overcharge cancel buy request) and add to sales
        var sql=`insert into sales set productname=?,date=${Date().slice(0,24)},amount=?`;
       db.query(sql,values,(err,results)=>{
        cb(err,results);
       }); 
    },
    getAllSales:(cb,value)=>{
        //do not forget to limit role access
        var sql=`select * from sales`;
        db.query(sql,value,(err,results)=>{
            cb(err,results)
        })
    }
}; //sales are done only by the cashier, maybe add his id later
//only manager can delete sale?