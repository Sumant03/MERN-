import { useContext } from "react";
import {auth} from "../firebase";

import {authContext} from "../AuthProvider";
import {Redirect} from "react-router-dom";

let Home =()=>{
    let user=useContext(authContext);

    return(
        <>
        {user?"":<Redirect to ="/LOGIN"/>}

        <h1>Home</h1>
        <button onClick={()=>{
            auth.signOut();
        }}>Logout</button>

        </>
    )
}
export default Home;