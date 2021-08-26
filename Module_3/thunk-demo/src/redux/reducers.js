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
            return {...state,loading:false}
        
            case "FAILURE_USER":
            return {...state,loading:false}
        default :
        return state;
    }
}
export default reducer;