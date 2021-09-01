export const fetchCreator=()=>{
    return{
        type:"FETCH_USERS"
    }
}
export const successCreator=(users)=>{
    return{
        type:"SUCCESS_USERS",
        payload:users
    }
}
export const failureCreator=(err)=>{
    return{
        type:"FAILURE_USERS",
        payload:err
    }
}

export const fetchUser=()=>{
    return(dispatch)=>{
      dispatch(fetchCreator());
      console.log("dispatched");
      console.log("Hi");
      fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
        console.log("fetching data");  
      return res.json();
      }).then((json)=>{
          
        dispatch(successCreator(json));
        console.log("in success");
      })
      .catch((err)=>{
        dispatch(failureCreator(err));
        console.log("in error");
      })

      


    }
}