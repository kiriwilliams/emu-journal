import React from "react";
import Moment from 'react-moment';
import { HashLink as Link } from 'react-router-hash-link';

require('dotenv').config();

function LineEntry({ noteID, date, moodcolor, moodtext, textColor }) {

    const pStyle = {
        background: moodcolor,
        color: textColor,
        padding: "10px",
        font: "Segoe UI",
        fontSize: "18px",
        borderRadius: "5px",
        margin: "5px"
    };

    

    return (
        < div>
            <div className="row" className="flex-wrap-reverse">
            <Link to={"/past-entries#" + noteID}>
                <p style={pStyle} className="font-weight-normal" className="text-decoration-none">
                    
                        <Moment format="LL">
                            {date}
                        </Moment>
                        : {moodtext}
                    
                </p>
                </Link>
            </div>
        </div >
    )

};


export default LineEntry;