import React from "react";
import './Login.css';
import Form from "../Form/Form";
const inputs = [
    {
        id: "usernameRegister",
        type: "text",
        name: "Username",
        feedback: "Please enter a username"
    },
    {
        id: "passwordRegister",
        type: "password",
        name: "Password",
        feedback: "Please enter a password",
    }
]

const Login = (props) => (


    <div id="LoginID" className="custom-modal">

<Form submitForm={props.submitForm} inputs={inputs} buttonId={"loginSubmit"} buttonName={"Login"} SignUp={props.Loging}/>
        {/* <form className="modal-content animate" noValidate onSubmit={props.onSubmit}>
            <div className="imgcontainer">
                <span onClick={props.Login} className="close" title="Close Modal">&times;</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYX5DpMPK1n5dIoghDAsr_-C2g91cV-IKXgoOxt_ZM2sjUVKx8" alt="Avatar" className="avatar" />
            </div>

            <div className="container">
                <label htmlFor="username"><b>Username</b></label>
                <input 
                type="text" 
                placeholder="Enter Username" 
                name="username"
                onChange={props.onChange}
                required 
                />

                <label htmlFor="password"><b>Password</b></label>
                <input 
                type="password" 
                placeholder="Enter Password" 
                name="password" 
                onChange={props.onChange}
                required  
                />

                <button type="submit" onClick={props.LoginSubmit}>Login</button>
                
            </div>

            <div className="container">
                <button onClick={props.Login} type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form> */}
    </div>


)

export default Login;