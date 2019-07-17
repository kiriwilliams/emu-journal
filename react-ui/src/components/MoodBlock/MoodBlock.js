import React, { Component } from "react";

class MoodBlock extends Component {

    state = {

    }

    // Emoji

    handleEmojiInputClick = (event) => {
        event.preventDefault();
        this.setState({
            emojishown: true

        })

    }
    handleChange = (event) => {
        this.setState({ text: event.target.value });
    }
    handleClose(e) {
        this.setState({ emojishown: false });
    }

   
    render() {
        const textColor = {
            color: this.state.color
        }

        if (this.props.editing) {
            return (
                <div className="col-6  d-flex align-items-center">
                    <div className="input-group input-group-sm mb-3">
                        <input type="text" className="form-control m-0" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="your mood today...." onChange={event => this.props.handleMood(event.target.value)} style={textColor} />
                    </div>
                </div>
            )
        }
        return (
            <div className="col-6 d-flex align-items-center">
                <p><span className="mood-title">Mood: </span> {this.props.mood}</p>
            </div>

        )
    }
}

export default MoodBlock;