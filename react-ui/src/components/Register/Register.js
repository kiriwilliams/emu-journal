import React from "react";
import './Register.css';
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
    },
    {
        id: "emailRegister",
        type: "text",
        name: "Email",
        helperId: "emailHelp",
        helperText: "You don't need an email to sign up, but it is necessary for account recovery."
    }
]
const Register = (props) => (

    <div id="RegisterID" className="register-modal">
        <Form submitForm={props.submitForm} inputs={inputs} buttonId={"signupSubmit"} buttonName={"Sign Up"} SignUp={props.SignUp}/>
        {/* <form className="modal-content animate" submit={props.register}>
            <div className="imgcontainer">
            <span onClick={props.SignUp} className="close" title="Close Modal">&times;</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYX5DpMPK1n5dIoghDAsr_-C2g91cV-IKXgoOxt_ZM2sjUVKx8" alt="Avatar" className="avatar" />
            </div>

            <div className="container">
                <label htmlFor="username"><b>Username</b></label>
                <input 
                type="text" 
                placeholder="Enter Username" 
                name="username"
                id="usernameRegister"
                onChange={props.onChange} 
                required className="form-control"
                />
                <span className="invalid-feedback">Please enter a username</span>
                

                <label htmlFor="password"><b>Password</b></label>
                <input 
                type="password" 
                placeholder="Enter Password" 
                name="password" 
                id="passwordRegister"
                onChange={props.onChange}
                required  className="form-control"
                />
                <span className="invalid-feedback">Please enter a password</span>

                <label htmlFor="email"><b>Email</b></label>
                <input 
                type="text" 
                placeholder="Enter Email"
                value={props.email}
                id="emailRegister"
                onChange={props.onChange}
                name="email" 
                required 
                />
                <span class="invalid-feedback">Your password cannot be recovered without an email</span>

                <button type="submit">Sign Up</button>
               
            </div>
        </form> */}
    </div>


)

export default Register;