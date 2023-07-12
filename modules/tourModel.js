//const app=require('express')();
//const http=require('http').Server(app);
const mongoose=require('mongoose');

const tourSchema = new mongoose.Schema({
  name:{
   type:String,
   required:[true,'A tour must have a name'],
   unique:true
  },
  rating:{
      type:Number,
      default:4.5
  },
  price:{
    type:Number,
    required:[true,'A tour must have a price']
     } 
});
const Tour = mongoose.model('Tour', tourSchema, 'tours', { maxTimeMS: 20000 }); // Set timeout to 20 seconds

module.exports=Tour;