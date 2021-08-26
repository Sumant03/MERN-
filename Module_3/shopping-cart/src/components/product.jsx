import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCreator } from "../redux/actions";
import "./product.css";

let Product = (props) => {
  console.log(props);
  let history=useHistory();
  let dispatch=useDispatch();
  return (
    <div className="product-card">
      <div className="product-img">
        <img
          src={props.data.img}
          onClick={()=>{
            history.push(`/preview/${props.data.id}`)
          }}
        />
      </div>
      <div className="product-btn">
        <button
         onClick={()=>{
          dispatch(addCreator(props.data.id));
        }}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;