import {useSelector} from "react-redux";
import { auth } from "../firebase";
import {Redirect} from "react-router-dom"

let Home =()=>{
    let user=useSelector((state)=>state);
    return(
        <>
        {user?" Home ":<Redirect to="/login"/>}

        <button onClick={()=>{
            auth.signOut();
        }}>
         Logout
        </button>
        </>
    )
}
export default Home;