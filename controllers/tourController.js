const fs=require('fs');

const tours=JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
)

exports.checkID = (req,res,next,val)=>{
      if(req.params.id * 1 > tours.length){
        return res.status(404).json({
            status : 'fail',
            message :'Invalid Id'
        });
       }
       next();
};

exports.checkBody = (req,res,next)=>{
     if(!req.body.name || !req.body.username){
        return res.status(400).json({
            status : 'fail',
            message :'Missing name or short'
        });
       }
       next();
};

exports.getAllTours=(req,res)=>{
    console.log(req.requestTime);
    res.status(200).json({
        status:'sucess',
        requestedAt:req.requestTime,
        results:tours.length, 
         data:{                   
        tours
      }
    })
};

exports.getTour=(req,res)=>{
    console.log(req.params);
 
    const id=req.params.id * 1;
    const tour=tours.find(el => el.id === id);
    res.status(200).json({
         status:'sucess',
              data:{
                 tour,
         }
     });
 };
 
exports.createTour=(req,res)=>{
   //console.log(req.body);
    const newId = tours[tours.length-1].id + 1;
    const newTour=Object.assign({id:newId},req.body);

    tours.push(newTour);
    
    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`
        ,JSON.stringify(tours),err=>{
        res.status(201).json({
            status:'sucess',
         data:{                   
            tour:newTour
          }
        })
})
};

exports. updateTour=(req,res)=>{
    res.status(200).json({
        status:'sucess',
        data:{
            tour:'<Updated tour here....>'
        }
    })
};

exports.deleteTour=(req,res)=>{
   res.status(200).json({
        status:'sucess',
        data:null
    })
}
