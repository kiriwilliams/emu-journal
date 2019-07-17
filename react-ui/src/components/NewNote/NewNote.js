import React, { Component } from "react";
import MoodBlock from "../MoodBlock/MoodBlock";
import SaveButton from "../SaveButton/SaveButton";
import AddTagsButton from "../AddTagsButton/AddTagsButton";
import API from "../../utils/API";


class NewNote extends Component {
    state = {
        text: "",
        mood: {},
        tags: [],
        newTag: "",
    }

    //Jen's code to save the note goes here
    handleClick = () => {
        alert("click");
        API.saveEntry({
            user: "Test_User",
            content: this.state.text,
            mood: this.state.mood,
            tags: this.state.tags
        })
            .then(data => alert(data))
            .catch(err => console.log(err));
    }

    handleMood = (event) => {
        const name = event.target.value;
        this.setState( prevState => ({
            mood: {
                name: name,
                color: this.state.mood.color
            }
        }));
    }

    handleColor = (color) => {
        console.log("handleColor: "+color);
        this.setState( prevState => ({
            mood: {
                color: color,
                name: this.state.mood.name
            }
        }));
    }
    addTag = (event) => {
        event.preventDefault();
        const tag = this.state.newTag;
        console.log(tag);
        if(tag){
            this.setState({ tags: [...this.state.tags, tag] })
        }
        this.setState({newTag: ""});

    }

    newTag = (event) => {
        event.preventDefault();
        const tag = event.target.value;
        console.log(event.target);
        console.log(event.target.value);
        this.setState({newTag: tag});
    }

    handleTextChange = (event) => {
        const text = event.target.value;
        this.setState({ text: text });
    }


    render(){ 
        return(
            <form>
                <MoodBlock handleColor={this.handleColor} handleMood={this.handleMood} />            
                <div className="form-group">
                    <label htmlFor="newEntry" className="sr-only">New Entry</label>
                    <textarea className="form-control" id="newEntry" rows="5" onChange={this.handleTextChange}></textarea>
                </div>
                <AddTagsButton addTag={this.addTag} newTag={this.newTag} tags={this.state.tags}></AddTagsButton>
                <SaveButton onClick={this.handleClick}></SaveButton>
            </form>
        )
    }
}

export default NewNote;