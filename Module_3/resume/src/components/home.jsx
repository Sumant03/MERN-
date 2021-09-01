import {useSelector} from "react-redux";
import { auth } from "../firebase";
import {Redirect, useHistory} from "react-router-dom"

let Home =()=>{
    let history=useHistory("");
 return(
     <div>
      Hi
     <button className="btn btn-primary" onClick={()=>{history.push("/login")}}>Logout</button>
     </div>
 )
    
}
export default Home;