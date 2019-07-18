
import React from "react";
import './Typewriter.css';
import Typing from 'react-typing-animation';

const Typewriter = () => (
    
    <Typing >
        <div className="typer">
            <span>Welcome to Emu</span>
            <Typing.Reset count={3} delay={500} />
            <span className="typer-font">How are you feeling today?</span>
            <Typing.Reset count={3} delay={500} />
            <span className="typer-font">Tell me about your day!</span>
            <Typing.Reset count={3} delay={500} />
            <span>Click sign up below</span>
            {/* <Typing.Backspace count={20} delay={2000} /> */}
        </div>

    
     </Typing>
);


export default Typewriter;