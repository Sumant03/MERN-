import { useSelector } from "react-redux";


let PersonalData=()=>{
    let template=useSelector((state)=>state.template)
    console.log(template);
    return (
        <>
        Hi there

    
        </>
    )
}
export default PersonalData;