import React from "react";
import './Jumbotron.css';
import TypeWriter from  "../Typewriter/Typewriter";


const Jumbotron = (props) => (
    <div>
        <div className="hero-bkg-animated">
            <div className="signUp">
            <TypeWriter/>
                <h4><a onClick={props.SignUp} className="sign-up" href="#">sign up</a></h4> 
            </div>
           
        </div>

    </div>
);

export default Jumbotron;