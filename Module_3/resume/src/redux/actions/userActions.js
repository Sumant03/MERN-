export const useCreator=(user)=>{
    return{
        type:"SET_USER",
        payload:user,
    }
}