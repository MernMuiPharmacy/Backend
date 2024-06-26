const express = require('express');
const statusMonitor=require('express-status-monitor');
const staff = require('./routes/staffRoute');
const sales = require('./routes/salesRoute');
const stock = require('./routes/stockRoute');
const suppliers= require('./routes/suppliersRoute');
const deletedstock=require('./routes/deletedStockRoute');
const deletedsuppliers=require('./routes/deletedSuppliersRoute');
const wipe=require('./routes/wipeRoute');
const db = require('./database/index');
const cors = require('cors')
require('dotenv').config();
const PORT=4000;

const cookieParser= require('cookie-parser');



const app= express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({credentials:true}))
app.use(cookieParser())

app.get('/',(req,res)=>res.json('are you a webcrawler?'))
app.use('/staff',staff);
app.use('/stock',stock);
app.use('/suppliers',suppliers);
app.use('/sales',sales);
app.use('/deletedstock',deletedstock);
app.use('/deletedsuppliers',deletedsuppliers);
app.use('/wipe',wipe);
app.use(statusMonitor({
    path: '/status',
    title: 'Express Status',
    span: 'right',
    chartVisibility: {
      mem: true,
      rps: true,
      cpu: true,
      load: true,
      statusCodes: true,
    },
  }));
app.get('/status',(req,res)=>{
    res.send('<p>Status Monitor</p>')
})
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))