import React, { Component } from "react";

class Input extends Component {
    state ={
        valid: this.props.validity,
        feedback: "invalid-feedback"
    }

    onFocus = () => {
        this.setState({valid: true});
        console.log("here");
    }

    feedback = () => {
        return this.props.validity ? this.setState({feedback: "invalid-feedback"}) : this.setState({feedback: "invalid-feedback show"});
    }

    render() {
        return (
            <div className="form-row py-2">
            <div className="col-12">
                <label htmlFor={this.props.id}>{this.props.name}</label>
                <input type={this.props.type} className={this.props.validity ? "form-group" : "form-group invalid"} id={this.props.id} name={this.props.name} placeholder={this.props.name} onChange={this.props.onChange} aria-describedby={this.props.helperId} onFocus={event => this.props.onFocus(event, this.props.name)}
                    required />
                <div className={this.props.validity ? "invalid-feedback" : "invalid-feedback show"}>
                    {this.props.feedback}
                </div>
                <small className="form-text text-muted" id={this.props.helperId}>{this.props.helperText}</small>
            </div>
        </div>
        )
    }
}


export default Input;