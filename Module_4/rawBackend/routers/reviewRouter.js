const express=require("express");
const reviewModel = require("../models/reviewModel");
const { protectRoute,isAuthorized,bodyChecker } = require("./myMiddleWare");
let reviewRouter= express.Router();
const {createElement,getElement,getElements,deleteElement,updateElement}=require("../helpers/factory");


const getReview=getElement(reviewModel);
const getReviews=getElements(reviewModel);
const createReviews=createElement(reviewModel);
const updateReviews=updateElement(reviewModel);
const deleteReviews=deleteElement(reviewModel);


reviewRouter.get("/getuseralso", getUsersAlso);
reviewRouter.use(protectRoute);
reviewRouter
     .route('/')
     .get(isAuthorized(["admin","ce"]),getReviews)
     .post(bodyChecker,isAuthorized(["admin"]),createReviews);


reviewRouter
    .route("/:id")
    .get(getReview)
    .patch(bodyChecker,isAuthorized(["admin","ce"]),updateReviews)
    .delete(bodyChecker,isAuthorized(["admin"]),deleteReviews)



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