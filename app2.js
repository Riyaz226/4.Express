const express =require('express');

const tourRouter=require('./routes/tourRoutes')
const userRouter=require('./routes/userRoutes')


const morgan = require('morgan')

const app=express();

//Enivoriment Variable 
//console.log(process.env.NODE_ENV)

// if(process.env.NODE_ENV === 'development'){
//   app.use(morgan('dev'))
// }


//1.MIDDLEWARE EXPRESS
app.use(morgan('dev'))
app.use(express.json());
app.use(express.static(`${__dirname}/public`)) //one folder read for img,and html file

app.use((req,res,next)=>{
    console.log('Hello from the middleware $$');
    next();
 })

 app.use((req,res,next)=>{

    req.requestTime=new Date().toISOString();
    next();
 })


//2.ROUTE MODULES`

//Implementing using Routing
app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);
  
//4.START SERVER

module.exports = app;