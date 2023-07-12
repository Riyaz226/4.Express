// const fs=require('fs');
// const express =require('express');

// const app=express();

// app.use(express.json());

// //2.//api call in json data server use => Rounting All side 
// const tours=JSON.parse(
//     fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// )


// //7.//Rounting
// const getAllUsers=(req,res)=>{
//     res.status(200).json({
//         status:'sucess',
//         results:tours.length, 
//          data:{                   
//         tours
//       }
//     })
// };

// const getUser=(req,res)=>{
//     console.log(req.params);
 
//     const id=req.params.id * 1;
//      if(id > tours.length){
//    return res.status(404).json({
//          status : 'fail',
//          message :'Invalid Id'
//      });
//     }
//     const tour=tours.find(el => el.id === id);
    
//     res.status(200).json({
//          status:'sucess',
//               data:{
//                  tour
//          }
//      });
//  };
 
// const createUser=(req,res)=>{
//    //console.log(req.body);
//     const newId = tours[tours.length-1].id+1;
//     const newTour=Object.assign({id:newId},req.body);

//     tours.push(newTour);
    
//     fs.writeFile(
//         `${__dirname}/dev-data/data/tours-simple.json`
//         ,JSON.stringify(tours),err=>{
//         res.status(201).json({
//             status:'sucess',
//             results:tours.length,  
//          data:{                   
//             tours:newTour
//           }
//         })
// })
// };

// const updateUser=(req,res)=>{
//     if(req.params.id * 1 > tours.length){
//         return res.status(404).json({
//             status : 'fail',
//             message :'Invalid Id'
//         });
//        }

//     res.status(200).json({
//         status:'sucess',
//         data:{
//             tour:'<Updated tour here....>'
//         }
//     })
// };

// const deleteUser=(req,res)=>{
//     if(req.params.id * 1 > tours.length){
//         return res.status(404).json({
//             status : 'fail',
//             message :'Invalid Id'
//         });
//        }

//     res.status(200).json({
//         status:'sucess',
//         data:null
//     })
// }
// // app.get('/api/v1/tours',getAllUsers);
// // app.get('/api/v1/tours/:id',getUser);
// // app.get('/api/v1/tours/:id',createUser);
// // app.get('/api/v1/tours',updateUser);
// // app.get('/api/v1/tours',deleteUser);   shorkat method

// app 
//   .route('/api/v1/tours')
//   .get(getAllUsers)
//   .post(createUser)

// app 
//   .route('/api/v1/tours/:id')
//   .get(getUser)
//   .patch(updateUser)
//   .delete(deleteUser)

// const port=3000;
// app.listen(port,()=>{
//     console.log(` App running on port ${port}...`);
// });

//1.// app.get('/',(req,res)=>{
//     res.status(200)
//         //.send('Hello from the server side!');
//     .json({message:'Hello from the server side!',app:'Natours'});
// })

// app.post('/',(req,res)=>{
//     res.send('You can post to this endpoint....');
// })

// app.get('/api/v1/tours',(req,res)=>{
//     res.status(200).json({
//         status:'sucess',
//         results:tours.length,          //server side other api mode convert my api website in document folder
//       data:{                   
//         tours
//       }
//     })
// })

//4.//new join update contact (Filter id)
// app.get('/api/v1/tours/:id',(req,res)=>{
//     console.log(req.params);
 
//     const id=req.params.id * 1;
//     // if(id > tours.length){
//    if(!tour){ 
//    return res.status(404).json({
//          status : 'fail',
//          message :'Invalid Id'
//      });
//     }
//     const tour=tours.find(el => el.id === id);
    
//     res.status(200).json({
//          status:'sucess',
//               data:{
//                  tour
//          }
//      });
//  });
 
 
 //3.//post requesr update in join data
 // app.post('/api/v1/tours',(req,res)=>{
 //    //console.log(req.body);
 //     const newId = tours[tours.length-1].id+1;
 //     const newTour=Object.assign({id:newId},req.body);
 
 //     tours.push(newTour);
     
 //     fs.writeFile(
 //         `${__dirname}/dev-data/data/tours-simple.json`
 //         ,JSON.stringify(tours),err=>{
 //         res.status(201).json({
 //             status:'sucess',
 //             results:tours.length,  
 //          data:{                   
 //             tours:newTour
 //           }
 //         })
 // })
 // });
 
 //6.//Handling Patch Requiest update data
//  app.patch('/api/v1/tours/:id',(req,res)=>{
//      if(req.params.id * 1 > tours.length){
//          return res.status(404).json({
//              status : 'fail',
//              message :'Invalid Id'
//          });
//         }
 
//      res.status(200).json({
//          status:'sucess',
//          data:{
//              tour:'<Updated tour here....>'
//          }
//      })
//  })
 
//  //7.//Delete Requiest
//  app.delete('/api/v1/tours/:id',(req,res)=>{
//      if(req.params.id * 1 > tours.length){
//          return res.status(404).json({
//              status : 'fail',
//              message :'Invalid Id'
//          });
//         }
 
//      res.status(200).json({
//          status:'sucess',
//          data:null
//      })
//  })
 