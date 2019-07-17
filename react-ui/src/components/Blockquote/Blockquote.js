import React from "react";
import './Blockquote.css';


const Blockquote = () => (
    <div className="container adjust-padding">
        <div className="row block-margin">
            <div className="col-md-4 col-12 text-center ">
                <img width="385px" height="280px" src="https://cdn.vox-cdn.com/thumbor/Su22ufw0Nw7BlUtOg5F3e9G-9Hk=/0x0:1717x1044/1200x800/filters:focal(722x385:996x659)/cdn.vox-cdn.com/uploads/chorus_image/image/56671365/vdhnbCX.0.png" alt="phone"/>
        
            </div>
            <div className="col-md-8 col-12 ">
        <blockquote className="blockquote text-center align-items-center">
            <p className="mb-0 quote">&ldquo;<strong> Writing in a journal each day</strong> allows you to direct your focus to what you accomplished, what you're grateful for and what you're committed to doing better tomorrow. Thus you more deeply enjoy your journey each day. &rdquo;</p>
            <footer className="blockquote-footer">Hal Elrod <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
        </div>
        </div>
    </div>
    
);

export default Blockquote;