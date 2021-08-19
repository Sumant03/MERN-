import { useContext } from "react";
import {auth,storage} from "../firebase";
import "./Home.css"
import VideoCard from "./VideoCard";
import {authContext} from "../AuthProvider";
import {Redirect} from "react-router-dom";

let Home =()=>{
    let user=useContext(authContext);

    return(
        <>
        {user?"":<Redirect to ="/LOGIN"/>}

        <div className="video-container">
        <VideoCard/>
        {/* <VideoCard/>
        <VideoCard/>
        <VideoCard/> */}
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

        size=size/1000000;
        if(size>10){
            alert("file size exceeds 10mb ");
            return;
        }
        
        type=type.split("/");
        console.log(type);


        if(type!=="video"){
            alert("Please upload a video ");
            return;
        }
        let upload =storage.ref(`/posts/${user.uid}/${Date.now()+"-"+name}`).put()
           }}/>

        
        </>

    )
}
export default Home;