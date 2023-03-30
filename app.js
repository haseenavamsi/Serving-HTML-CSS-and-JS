const path=require('path');

const express=require('express');

const bodyParser=require('body-Parser');

const app=express();

const adminRoutes=require('./routes/admin');

const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extented:false}))

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'../','views','shop.html'));
    
  
  
});

app.listen(3000); 