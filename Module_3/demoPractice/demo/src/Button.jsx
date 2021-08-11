import { prop } from "cheerio/lib/api/attributes"
import  "./Button.css"

let Button =({symbol})=>{
   
    return (
        <div className="btn">
        {symbol}
        </div>
    )
}

export default Button;