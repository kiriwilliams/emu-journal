import React, {Component} from "react";

class Note extends Component {

    render() {
        if(this.props.editing){

        
        return(
            <div className="col-12">
            <textarea className="notes" onChange={event => this.props.handleTextChange(event)} value={this.props.text}></textarea>
        </div>
        )
        }
        else{
            return(
                <div className="col-12">
                    <p className="notes text-dark">{this.props.text}</p>
                </div>
            )
        }
    }
}

export default Note;