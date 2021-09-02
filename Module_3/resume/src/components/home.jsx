import {useSelector} from "react-redux";
import { auth } from "../firebase";
import {Redirect, useHistory} from "react-router-dom"

let Home =()=>{
    let user = useSelector((state) => state);
    return (
      <>
        {user ? "" : <Redirect to="/login" />}
    

    <button  className="m-4"onClick={()=>{auth.signOut();}}>Logout</button>
       
      </>
    );
    
}
export default Home;