const express=require("express");
const planModel = require("../models/planModel");
const { protectRoute,isAuthorized,bodyChecker } = require("./myMiddleWare");
let planRouter= express.Router();
const {createElement,getElement,getElements,deleteElement,updateElement}=require("../helpers/factory");


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



module.exports=planRouter