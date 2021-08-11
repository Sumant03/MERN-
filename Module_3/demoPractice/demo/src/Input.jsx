import "./Input.css"

let Input=({text,result})=>{

    return(
        <div className="Input">
         
         <div className="result">{result}</div>
         <div className="text">{text}</div>

        </div>
    )


}
export default Input;

