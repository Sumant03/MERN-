const { element } = require("xml");

function createElement(model){
 return  async function(req,res){
      
        try{
            let element=await model.create(req.body);
            res.status(200).json({
                "message":"element added in database",
                data:element
            })
    
        }catch(err){
            res.status(404).json({
                "message":err.message
            })
        }
        }
}

function getElement(model){
 return  async function(req,res){
        let {id}=req.params;
        try{
            let user=await model.findById(id);
            res.status(200).json({
                "message":"user found in database",
                data:user
            })
    
        }
        catch(err){
            res.status(404).json({
                "message":err.message
            })
        }
        
        }
}

function getElements(model){
  return  async function(req,res){
        let element=await model.find();
      try{
        res.status(200).json({
            element:element
        })
    }catch(err){
        res.status(404).json({
            "message":err.message
        })
    }
    }
}

function updateElement(model){
  return  async function(req,res){
        let {id} =req.params;
        // console.log("getting req.params from factory");
        try{
            // console.log("2");
            let element=await model.findById(id);
            if(element){
                // console.log("3");
                if(req.body.password||req.body.confirmPassword){
                    return res.json({
                        "message":"use forget password instead"
                    })
                }
               
                for(let key in req.body){
                    element[key]=req.body[key];
                }
                await element.save({
                    validateBeforeSave:false
                });
                // console.log("4");
                res.status(200).json({
                    "message":"data updated",
                    data:element
                })
            }
    
        }
        catch(err){
            res.status(404).json({
                "message":err.message
            })
        }
    }
}

function deleteElement(model){
 return  async function(req,res){
        let {id} =req.params;
        try{
             let element=await model.findByIdAndDelete(id);
             res.status(200).json({
                 "message":"user data deleted ",
                 element:element
             })
        }
        catch(err){
            res.status(404).json({
                "message":err.message
            })
        }
        }
}

module.exports={createElement,getElement,getElements,deleteElement,updateElement}