import React, { Component } from "react";
import Input from "./Input";


class Form extends Component {
    state = {
        validity: {
            Username: true,
            Password: true,
            Email: true
        }

    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    onFocus = (event, input) => {
        event.preventDefault();
        this.setState(prevState => ({
            validity: {
                ...prevState.validity,
                [input]: true
            }
        }))
        // console.log("here");
    }

    validate = (event) => {
        event.preventDefault();
        console.log("clicked");

        if (this.state.Username && this.state.Password) {
            this.props.submitForm({
                username: this.state.Username,
                password: this.state.Password,
                email: this.state.Email
            });
        }

        else {
            if (!this.state.Username) {
                this.setState(prevState => ({
                    validity: {
                        ...prevState.validity,
                        Username: false
                    }
                }))

            }
            if (!this.state.Password){
                this.setState(prevState => ({
                    validity: {
                        ...prevState.validity,
                        Password: false
                    }
                }))
            }

        }
        // console.log("submit button clicked");
        // event.preventDefault();
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
        // form.classList.add('was-validated');      
        this.forceUpdate();
    }


    render() {
        return (
            <form className="p-3 modal-content animate needs-validation" noValidate>
                <div className="imgcontainer">
                    <span onClick={this.props.SignUp} className="close" title="Close Modal">&times;</span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYX5DpMPK1n5dIoghDAsr_-C2g91cV-IKXgoOxt_ZM2sjUVKx8" alt="Avatar" className="avatar" />
                </div>
                {this.props.inputs.map(input => (
                    <Input key={input.id} type={input.type} id={input.id} name={input.name} feedback={input.feedback} helperId={input.helperId} helperText={input.helperText} onChange={this.handleInputChange}  onFocus={this.onFocus} validity={this.state.validity[input.name]} />
                ))}
                <button id={this.props.buttonId} className="submitButton" onClick={event => this.validate(event)}>{this.props.buttonName}</button>
            </form>
        )
    }
}

export default Form;