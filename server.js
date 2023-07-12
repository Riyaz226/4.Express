const mongoose = require('mongoose')
// require('dotenv').config();

const app = require('./app2')
 const dotenv=require('dotenv');

dotenv.config({ path: './.env'});

const DB=process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
)

//const DB="mongodb+srv://Riyaz:4TZTH3vge7Avj5aU@cluster0.etwnrqo.mongodb.net/?retryWrites=true&w=majority"
//const DB=process.env.DATABASE

mongoose
//.connect(process.env.DATABASE_LOCAL,{
.connect( DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false,
    bufferTimeoutMS: 30000,
})
.then("con",()=>console.log("DB connection SucessFull"))


const tourSchema = new mongoose.Schema({
   name:{
    type:String,
    required:[true,'A Tour must have a name'],
    unique:true
   },
  rating:{
    type:Number,
   rating:4.5
},  
   price:{
    type:Number,
    required:[true,'A Tour must have a number']
   }  
})
const Tour = mongoose.model('Tour',tourSchema,'testTour');

const testTour = new Tour({
    name: "Elliot Alderson",
    rating:4.3,
    price:997
})

testTour
.save()
.then(doc=>{
    console.log(doc);
})
.catch(err =>{
    console.log('Error %% :',err)
})
//const connection=mongoose.connection;

console.log(process.env.NODE_ENV);
const port=process.env.PORT|| 3000;
app.listen(port,()=>{
    console.log(` App running on port ${port}...`);
});