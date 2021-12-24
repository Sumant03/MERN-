const express=require("express");
const { getElement, createElement, deleteElement } = require("../helpers/factory");
const planModel = require("../models/planModel");
const { protectRoute,isAuthorized,bodyChecker } = require("./myMiddleWare");
let planRouter= express.Router();
const {createElement,getElement,getElements,deleteElement,updateElement}=require("../helpers/factory");

planRouter
     .route('/')
     .get(protectRoute,isAuthorized(["admin","ce"]),getPlans)
     .post(bodyChecker,isAuthorized(["admin"]),createPlans);


planRouter
    .route("/:id")
    .get(getPlan)
    .post(bodyChecker,isAuthorized(["admin","ce"]),updatePlans)
    .delete(bodyChecker,isAuthorized(["admin"]),deletePlans)

    const getPlan=getElement(planModel);
    const getPlans=getElements(planModel);
    const createPlans=createElement(planModel);
    const updatePlans=createPlans(planModel);
    const deletePlans=deleteElement(planModel);

