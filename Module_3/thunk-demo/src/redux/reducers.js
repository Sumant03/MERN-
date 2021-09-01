let initialState ={
    loading:null,
    data:[],
    err:null
}

let reducer =(state=initialState,action)=>{
    switch(action.type){
        
        case "FETCH_USER":
            return {...state,loading:true}
            
        case "SUCCESS_USER":
            return {...state,data:action.payload,loading:false}
        
            case "FAILURE_USER":
            return {...state,err:action.payload,loading:false}
        default :
        return state;
    }
}
export default reducer;