import { useContext, useEffect, useState } from "react";
import {auth,storage,firestore} from "../firebase";
import "./Home.css"
import VideoCard from "./VideoCard";
import {authContext} from "../AuthProvider";
import {Redirect} from "react-router-dom";

let Home =()=>{
    let user=useContext(authContext);
    let [posts,setPosts]=useState([]);
     
    useEffect(()=>{
      
        firestore.collection("posts").onSnapshot((querySnapshot)=>{
            let arr=[];

            let docArr=querySnapshot.docs;
            for(let i=0;i<docArr.length;i++){
                arr.push({id:docArr[i].id,...docArr[i].data()});
            }
            console.log(arr);
            setPosts(arr);
        })


    },[]
    )

    return(
        <>
        {user?"":<Redirect to ="/LOGIN"/>}

        <div className="video-container">
       { posts.map((el)=>{
         return  <VideoCard key={el.id} data={el}/>
       })}
        </div>
        
        
        <button onClick={()=>{
            auth.signOut();
        }}  className="home-logout-btn">Logout</button>


       <input type="file"
        onClick={(e)=>{
            e.currentTarget.value=null;
        }}
        onChange={(e)=>{
          
        let videoObj=  e.currentTarget.files[0];
        let {name,size,type}=videoObj;
  console.log(videoObj);
        size=size/1000000;
        if(size>10){
            alert("file size exceeds 10mb ");
            return;
        }
        
        type=type.split("/");
        console.log(type[0]);


        if(type[0]!=="video"){
            alert("Please upload a video ");
            return;
        }
        let upload =storage.ref(`/posts/${user.uid}/${Date.now()+"-"+name}`).put(videoObj)

         upload.on("state-changed",null,null,()=>{
           upload.snapshot.ref.getDownloadURL().then((url)=>{
                 firestore.collection("posts").add({name:user.displayName,url})
           })
         })

}}/>

        
        </>

    )
}
export default Home;