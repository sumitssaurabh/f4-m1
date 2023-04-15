import React, { useEffect, useState } from "react";


const Signup = () => {
  const initialValue = {
    FullName: " ",
    Email: " ",
    Password: " ",
    confirmPassword: " ",

  }
 
  
    const [formvalue, setFormValue] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
   
const handleChange = (e) => {
    console.log(e.target)
    const {FullName,value}=e.target;
    setFormValue({...formvalue, name : value });
    console.log(formvalue)
}
const handleSubmit =(e) => {
    e.preventDefault();
  setFormError ( validate(formvalue));
  setIsSubmit(true);
}

useEffect(() => {
    console.log(formError)
    if (Object.keys (formError).length === 0  && isSubmit ){
        console.log(formvalue )
    }
}   ,[formError])

let validate  = (values) => {
    const error ={}
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
     if(!values.name){
        error.name = 'All the field mandatory'
     }
     if(!values.Email){
        error.name = 'All the field mandatory'
     }
     if(!values.password){
        error.name = 'All the field mandatory'
     }
     if(!values.confirmPassword){
        error.name = 'All the field mandatory'
     }

}




  return (
    <div class="d1">
      <h1 id="signup">Signup</h1>
      <form>
        <input
          type="text"
          value={formvalue.name}
          name=" FullName"
          class="inputBox"
          id="Full Name"
          placeholder="Full Name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name=" Email"
          value={formvalue.Email}
          class="inputBox"
          id="Email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name=" Password"
          value={formvalue.password}
          class="inputBox"
          id="Password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name=" confirmPassword"
          value={formvalue.confirmPassword}
          class="inputBox"
          id="confirm Password"
          placeholder="confirm Password"
          onChange={handleChange}
        />
        <br />
        <p>{formError}</p>

        <button id="btn"> Signup </button>
      </form>
    </div>
  );
};

export default Signup;
