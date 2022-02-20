import { useContext} from "react";

import { signInWithGoogle } from "../firebase";

import { authContext } from "../AuthProvider";

import { Redirect } from "react-router";




let Login=()=>{ 
    let user=useContext(authContext);
return(
    <>
    {user?<Redirect to="/"/>:""}
    <button onClick={()=>{
        signInWithGoogle();
    }}
    className="btn btn-primary m-4">
   Login with Google
    </button>


    </>

)
}

export default Login;