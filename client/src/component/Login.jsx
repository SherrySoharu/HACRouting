import { useState } from "react";
import "../Styles/form.css";
import { useNavigate } from "react-router-dom";

const Form=()=>{

    const[name,SetName]=useState("");
    const[password,SetPassword]=useState("");
    const[confirm,SetConfirm]=useState("");
    const navigate = useNavigate();

    // const change=(value)=>{ 
    //     SetName(value);
    // }

    if(localStorage.getItem("name")) navigate("/Home");



    function login(){
        
        if(name.length && password.length && confirm.length){
            if(name.length <=15){ 
                 if(password==confirm){
                    if(password.length >= 6){
                        alert("Login successfully")
                        localStorage.setItem("name",name);
                        localStorage.setItem("pwd",password);
                        navigate("/Home");
                    }
                    else{
                        alert("password must be greater than 6")
                    }
                }else{
                    alert(" password and Confirm password must be same")
                }
            }else{
               alert("username must be less than 15 characters")
            }
        }else{
            alert("Please fill all values")
        }
    }

    return(
        <div className="login">
            <div className="form">
            <label htmlFor="name"> Username:</label>
            <input  value={name} onChange={(event)=>SetName(event.target.value)} type="text"  placeholder="Enter your name" id="name"/>
            </div>
           <div className="form">
           <label htmlFor="pwd">Password:</label>
            <input value={password} onChange={(e)=>SetPassword(e.target.value)}type="password" placeholder="Enter Password" id="pwd"/>
            </div> 
          <div className="form"> 
          <label htmlFor="confirmpwd"> Confirm Password:</label>
            <input value={confirm} onChange={(e)=>SetConfirm(e.target.value)} type="password" placeholder="Confirm Password" id="confirmpwd"/>
            </div> 
            <button onClick={login}>Login</button>
        </div>

    )

}
export default Form;
