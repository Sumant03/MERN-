import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./component/Home";
import Login from "./component/Login"
import AuthProvider from "./AuthProvider"
import {useEffect} from "react";
import { firestore } from "./firebase";


let App=()=>{
  useEffect(()=>{
    

    async function f(){
      let querySnapshot=await firestore.collection("user").get();
      
      for(let i=0;i<querySnapshot.docs.length;i++){
        console.log(querySnapshot.docs[i].data);
      }


    }
    f()

  //    let f=async ()=>{
       
  //     let docRef= await firestore.collection("user").doc("fi6TR8f4jRfo2xl1DSXJ")
  //        let document= await docRef.get();
  //        console.log(document.id);


  //    } 



  // f();


  })


  
  return (
   <>
  
 




  {/* <AuthProvider>
  <Router>
      
        

        <Switch>
    
      <Route exact  path="/">
      <Home/>
      </Route>
      
      <Route exact path="/login">
      <Login/>
      </Route>
     

    </Switch>
  

    </Router>
    </AuthProvider> */}

    </>
  )
}



export default App;









