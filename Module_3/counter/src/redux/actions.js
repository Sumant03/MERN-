//they are just objects

//whne writing actions in redux we create something called action create function whtihc reaturns an object

export const  incrementCreator=(value)=>{
    return {
        type:"INCREMENT",
        payload:value,
    }
}
export const decrementCreator=()=>{
    return{
        type:"DECREMENT"
    }
}

export const loginCreator = () => {
    return {
      type: "LOGIN",
    };
  };
  
  export const logoutCreator = () => {
    return {
      type: "LOGOUT",
    };
  };