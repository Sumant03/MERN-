const express=require("express");
const planModel = require("../models/planModel");
const { protectRoute,isAuthorized,bodyChecker } = require("./myMiddleWare");
let planRouter= express.Router();
const {createElement,getElement,getElements,deleteElement,updateElement}=require("../helpers/factory");
const req = require("express/lib/request");


const getPlan=getElement(planModel);
const getPlans=getElements(planModel);
const createPlans=createElement(planModel);
const updatePlans=updateElement(planModel);
const deletePlans=deleteElement(planModel);

planRouter.use(protectRoute)
planRouter
     .route('/')
     .get(isAuthorized(["admin","ce"]),getPlans)
     .post(bodyChecker,isAuthorized(["admin"]),createPlans);


planRouter
    .route("/:id")
    .get(getPlan)
    .patch(bodyChecker,isAuthorized(["admin","ce"]),updatePlans)
    .delete(bodyChecker,isAuthorized(["admin"]),deletePlans)
planRouter
    .route("/getBestPlans",getBestPlans);


async function getBestPlans(req,res){
    try{
    
        let plan=await planModel.find()
        .sort("-averageRating").populate({
            path:"review",
            select:"review"
        })
        res.status(400).send({
            "message":"user found yr",
            plan:plan
        })
    }catch(err){
        res.status(200).json({
        "message":"error occured",
        err:err.message
    })
}
}    

module.exports=planRouter