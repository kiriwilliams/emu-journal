import React, { Component } from "react";
import MoodBlock from "../MoodBlock/MoodBlock";
import DateDisplay from "../DateDisplay/DateDisplay";
import Tags from "../Tags/Tags";
import EntryFooter from "../EntryFooter/EntryFooter";
import Note from "../Note/Note";
import API from "../../utils/API";
require('dotenv').config();


class Entry extends Component {
    state = {
        editing: this.props.editing,
        userID: window.sessionStorage.userID,
        noteID: this.props.noteID,
        text: "",
        mood: "",
        tags: [],
        newTag: "",
        emojishown: false,
        inputText: "",
        placeholder: "🙂",
        modal: false,
        unmountOnClose: true,
        textColor: "#000"

    }

    componentDidMount = () => {
        this.setState({
            editing: this.props.editing,
            noteID: this.props.noteID,
            date: this.props.date,
            text: this.props.content,
            color: this.props.color || "#fff",
            mood: this.props.mood,
            textColor: this.props.textColor || "#000",
            tags: this.props.tags || []
        });


    }

    updateTextColor = (color) => {
        this.setState({ textColor: color });
    }

    // end color picker

    handleClick = () => {
        console.log("handle Click");
        // console.log(this.state.noteID);
        if (this.state.noteID && this.state.noteID!== "newEntry") {
            API.updateEntry({
                noteID: this.state.noteID,
                content: this.state.text,
                color: this.state.color,
                textColor: this.state.textColor,
                mood: this.state.mood,
                tags: this.state.tags,
                userID: this.state.userID
            }, window.sessionStorage.token)
                .then(data => {
                    console.log(data);
                    window.location.reload();
                })
                .catch(err => console.log(err));
        }

        else {
            API.saveEntry({
                content: this.state.text,
                color: this.state.color,
                textColor: this.state.textColor,
                mood: this.state.mood,
                tags: this.state.tags,
                userID: this.state.userID
            }, window.sessionStorage.token)
                .then(data => {
                    console.log(data);
                    window.location.reload();
                })
                .catch(err => console.log(err));
        }
    }

    delete = () => {
        API.deleteEntry(this.state.noteID, window.sessionStorage.token)
            .then(data => window.location.reload())
            .catch(err => console.log(err));
    }

    handleMood = (text) => {
        this.setState(prevState => ({
            mood: text
        }));
    }

    handleColor = (color) => {
        // console.log("handleColor: " + color);
        this.setState(prevState => ({
           color: color,
           textColor: this.pickTextColorBasedOnBgColorSimple(color, "#FFFFFF", "#000000")  
        }));
      
    }

   pickTextColorBasedOnBgColorSimple = (bgColor, lightColor, darkColor) => {
        var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
        var r = parseInt(color.substring(0, 2), 16); // hexToR
        var g = parseInt(color.substring(2, 4), 16); // hexToG
        var b = parseInt(color.substring(4, 6), 16); // hexToB
        return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
            darkColor : lightColor;
}

    addTag = (newTag) => {
        if (newTag.trim()) {
            this.setState({ tags: [...this.state.tags, newTag] });
        }

    }

    handleTextChange = (event) => {
        const text = event.target.value;
        this.setState({ text: text });
    }

    editingState = (editing) => {
        this.setState({ editing: editing });
    }

    render() {


        return (
            < div className={this.props.visible ? "entryBackground mb-3" : "entryBackground mb-3 hidden"} style={{ backgroundColor: this.state.color, color: this.state.textColor}} >

           <div id={this.state.noteID}></div>
                <div className="row entryHeader" id="entryHeader">
                    <DateDisplay date={this.state.date} />
                    <MoodBlock editing={this.state.editing} handleMood={this.handleMood} mood={this.state.mood} />
                </div>
                <div className="row noteComponent">
                    <Note editing={this.state.editing} text={this.state.text} handleTextChange={this.handleTextChange} />
                </div>
                <Tags editing={this.state.editing} tags={this.state.tags} />
                <EntryFooter addTag={this.addTag} editing={this.props.editing} editingState={this.editingState} handleClick={this.handleClick} handleColor={this.handleColor} delete={this.delete} />
            </div >
        )

    }
}

export default Entry;