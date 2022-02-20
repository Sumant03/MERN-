const express=require("express");
const reviewModel = require("../models/reviewModel");
const planwModel = require("../models/planModel");
const { protectRoute,isAuthorized,bodyChecker } = require("./myMiddleWare");
let reviewRouter= express.Router();
const {getElement,getElements,updateElement}=require("../helpers/factory");
const planModel = require("../models/planModel");




const getReview=getElement(reviewModel);
const getReviews=getElements(reviewModel);
const updateReviews=updateElement(reviewModel);



//createReview

//Review:-> put entry  
//->go in plan , 
//->new review has come so we will 
//->update its avarage rating
//-> plan.review add-> reviewID (add review) 

const createReview =async function(req,res){
     try{
       let review=await reviewModel.create(req.body);
       let planId =review.plan;

       let plan =await planModel.findById(plan);
       plan.review.push(review["_id"]);

       if(plan.averageRating){
            let sum=plan.averageRating*plan.review.length;
            let finalAvgRating=(sum+review.rating)/(plan.review.length+1);
            plan.averageRating=finalAvgRating;

       }else{
            plan.averageRating=finalAvgRating;
       }


     }catch(err){
          res.status(500).json({
               message:err.message
          })
     }
} 

//deleteReview

const deleteReview=async function(req,res){
     try{
 
          let review= await reviewModel.findByIdAndDelete(req.body.id);
          console.log("review",review);
          let planId=review.plan;
          let plan=await planModel.findById(planId);
          let idxOfReview=plan.review.inddexOf(review["_id"]);
          plan.review.splice(idxOfReview,1);
          await plan.save();
          res.status(200).json({
               "message":"review deleted",
               review:review
          })
     }
     catch(err){

          res.status(500).json({
               message:err.message
          })
     }
}



reviewRouter.get("/getuseralso", getUsersAlso);
reviewRouter.use(protectRoute);
reviewRouter
     .route('/')
     .get(isAuthorized(["admin","ce"]),getReviews)
     .post(bodyChecker,isAuthorized(["admin"]),createReview);


reviewRouter
    .route("/:id")
    .get(getReview)
    .patch(bodyChecker,isAuthorized(["admin","ce"]),updateReviews)
    .delete(bodyChecker,isAuthorized(["admin"]),deleteReview)



async function getUsersAlso(req,res){


try{
let review =await reviewModel.find().populate({
     path:"plan",
     select:"email name duration"
})
res.json({
     "review":review
})
}
catch(err){
res.json({ "error":err.message})
}

}


module.exports=reviewRouter;