import React, { Component } from "react";
import Moment from 'react-moment';

class DateDisplay extends React.Component {
    state = {
        date: ""
    };

    componentDidMount() {
        this.props.date ? this.setState({ date: "hi" }) : this.getDate();
    }

    getDate = () => {
        var date = new Date().toDateString();
        this.setState({ date });
    };


    render() {

        return (
            <div className="col-6 d-flex align-items-center py-4">
                <span className="mood-title h3">
                <Moment format="LL">
                            {this.props.date}
                        </Moment></span>
            </div>
        );
    }
}

export default DateDisplay;