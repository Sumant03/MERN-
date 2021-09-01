import { useState } from "react";
import { useHistory } from "react-router-dom";

let SignUp = () => {
  let history = useHistory("");

  return (
    <>
       <div className="mt-4 col-4 offset-4">
      <form className="mt-4 ">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <div> <button type="submit" 
  class="btn btn-primary mt-4"
  
  >SignUp</button></div>

 
</form>
        </div>
    </>
  );
};

export default SignUp;