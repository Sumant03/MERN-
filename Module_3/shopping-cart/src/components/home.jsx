import Product from "./product";
import "./home.css"
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
let Home = () => {
  let history=useHistory();
  let state=useSelector((state)=>state)
  
  return (
    <>
      <div className="product-container">
      {state.map((el,index)=>{
      
        return <Product key={index} data={el}/>
      })}
      
        <button
        onClick={() => {
          history.push("/cart");
        }}
        className="shopping-cart-home"
      >
        <span class="material-icons">shopping_cart</span>
      </button>
      </div>
    </>
  );
};

export default Home;