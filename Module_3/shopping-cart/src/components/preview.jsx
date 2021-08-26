import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./preview.css"
import {addCreator} from "../redux/actions"
let Preview = () => {
    let state=useSelector((state)=>state);
    let dispatch=useDispatch();
    let {id}=useParams();
    let obj=state[id];
return <>
    <div className="preview-container">
         
         <div className="preview-img-container">
             <img  src={obj.img}></img>
         </div>
         <div className="preview-listing">
             <h2>{obj.name}</h2>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
                     elit. Quod praesentium inventore ipsa veritatis 
                     numquam placeat? Nulla repellat aliquam doloribus
                      alias assumenda dolorum minima hic necessitatibus
                       ad consectetur amet ducimus, maiores odio 
                       exercitationem ut quisquam nemo? A iste aliquid 
                       quia non culpa quis nulla nisi neque sapiente,
                        perferendis voluptatibus animi dolorum.</p>
             <button
              onClick={()=>{
                dispatch(addCreator(obj.id));
              }}
             >Add to Cart</button>
         </div>

    </div>
    
    
    
    </>;
  };
  
  export default Preview;