const express = require('express')
const tourController = require('../controllers/tourController');

const tourRouter=express.Router()

tourRouter.param('id',tourController.checkID)

//create a checkbody middleware
//check if body contains the name and price property
//if not,send back 400 (bad request)
//Add it to the post handler stack


tourRouter
  .route('/')
  // .get(tourController.getAllTours)
  // .post(tourController.createTour)
.get(tourController.getAllTours)
.post(tourController.checkBody,tourController.createTour)
//.post(tourController.createTour)

tourRouter  
.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour)

  module.exports=tourRouter;