import React, { Component } from "react";
import './MainEntry.css';
import EmojiPicker from 'emoji-picker-react';
import Popover from 'react-simple-popover';
import JSEMOJI from 'emoji-js';
import API from "../../utils/API";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import AddTagsButton from "../AddTagsButton/AddTagsButton";
import '../MoodBlock/pickr.min.css';
import Pickr from '@simonwep/pickr';
import "../MoodBlock/MoodBlock.css";
import NewNote from "../NewNote/NewNote";
import Calendar from "../Calendar/Calendar";

class MainEntry extends Component {
    state = {
        userID: "5cf72d4b24f21b26a86762cf",
        text: "",
        mood: {},
        tags: [],
        newTag: "",
        emojishown: false,
        inputText: "",
        placeholder: "🙂",
        modal: false,
        unmountOnClose: true,
        color: ""
    }
// modal
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    changeUnmountOnClose = event => {
        let value = event.target.value;
        this.setState({ unmountOnClose: JSON.parse(value) });
    }

// end modal

// color picker
componentDidMount() {
    // Simple example, see optional options for more configuration.
    const pickr = Pickr.create({
        el: '.color-picker',

        swatches: ['#F44336', '#E91E63', '#9C27B0', '#673AB7'],

        components: {

            // Main components
            preview: false,
            opacity: false,
            hue: true,

            // Input / output Options
            interaction: {
                hex: false,
                rgba: false,
                hsla: false,
                hsva: false,
                cmyk: false,
                input: false,
                clear: false,
                save: true
            }
        }
    });

    pickr
        .on('init', (...args) => {
            console.log('init', args);

        })
        .on('change', (...args) => {
            let color = args[0].toHEXA().toString();
            console.log('change', color);
            this.handleColor(color);
            this.updateTextColor(color);
        })
        .on('swatchselect', (...args) => {
            let color = args[0].toHEXA().toString();
            console.log('swatch', color);
            this.handleColor(color);
            this.updateTextColor(color);
        })
        .on('save', (...args) => {
            let color = args[0].toHEXA().toString();
            console.log('save', color);
            this.handleColor(color);
            this.updateTextColor(color);
        });
}

updateTextColor = (color) => {
    this.setState({color: color});
}
// end color picker

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

    handleEmojiClick = (code, emoji) => {
        let jsemoji = new JSEMOJI();
        jsemoji.img_set = 'emojione';
        // set the storage location for all emojis
        jsemoji.img_sets.emojione.path = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/';
        let emojiPic = jsemoji.replace_colons(`:${emoji.name}:`);
        this.setState({
            inputText: this.state.inputText + emojiPic,
            placeholder: emojiPic
        });
    }
// End Emoji

    //Jen's code to save the note goes here
    handleClick = () => {
        alert("click");
        API.saveEntry({
            content: this.state.text,
            mood: this.state.mood,
            tags: this.state.tags,
            userID: this.state.userID
        })
            .then(data => alert(data))
            .catch(err => console.log(err));
    }

    handleMood = (event) => {
        const name = event.target.value;
        this.setState(prevState => ({
            mood: {
                name: name,
                color: this.state.mood.color || "#fff"
            }
        }));
    }

    handleColor = (color) => {
        console.log("handleColor: " + color);
        this.setState(prevState => ({
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
        if (tag) {
            this.setState({ tags: [...this.state.tags, tag] })
        }
        this.setState({ newTag: "" });

    }

    newTag = (event) => {
        event.preventDefault();
        const tag = event.target.value;
        console.log(event.target);
        console.log(event.target.value);
        this.setState({ newTag: tag });
    }

    handleTextChange = (event) => {
        const text = event.target.value;
        this.setState({ text: text });
    }

    render() {
        const textColor = {
            color: this.state.color
        }

        return (
            <div>
                    <div className="row row-width">
                        <div className="col-12 col-md-3 side-bar mb-2 bg-secondary">
                            <p className="mt-2 font text-white">Chrissy's journal</p>
                            <div className="row mb-1">
                                <div className="col-12 bg-white border rounded border-dark py-3 ">
                                    <p className="sideBarFont "><i className="fas fa-plus-circle mr-1"></i> Add new entry</p>
                                </div>

                            </div>
                            <div className="row mb-1">
                                <div className="col-6 bg-white border rounded border-dark py-3 ">
                                    <p className="sideBarFont "><i className="fas fa-calendar-alt "></i> Calendar</p>
                                </div>
                                <div class="col-6 bg-white border rounded border-dark py-3 ">
                                    <p className="sideBarFont "><i className="fas fa-list-alt"></i> All entry</p>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-12">
                                    <Calendar />

                                </div>
                            </div>

                        </div>

                      {/* MAIN CONTENT */}

                        <div className="col-md-9 main-content mb-2 bg-secondary">
                            <form className="position-relative">
                                <div className="row mt-4 ">
                                    <div className="col-6">
                                        <div className="input-group input-group-sm mb-3">
                                            <div className="input-group-prepend ">
                                                <span className="input-group-text" id="inputGroup-sizing-sm">Date</span>
                                            </div>
                                            <input type="text" className="form-control m-0" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-group input-group-sm mb-3">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-sm input-group-text mt-0 "  onClick={this.handleEmojiInputClick} id="inputGroup-sizing-sm">{this.state.placeholder}</button>
                                                {this.state.emojishown ? <Popover
                                                    placement='left'
                                                    container={this}
                                                    target={this.refs.target}
                                                    show={this.state.emojishown}
                                                    onHide={this.handleClose.bind(this)} >
                                                    <p> <EmojiPicker onEmojiClick={this.handleEmojiClick} /></p>
                                                </Popover> : null}
                                            </div>
                                            <input /*value={this.state.inputText}*/ type="text" className="form-control m-0" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="your mood today...."  onChange={this.handleMood} style={textColor}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <textarea className="notes" onChange={this.handleTextChange}></textarea>
                                    </div>
                                </div>

                                <div className="row my-2 ">
                                    <div className="col-6">
                                        <a className="btn btn-small btn-secondary choose_file mr-2 " href="#">
                                            <i className="fas fa-paint-brush icon-size "></i>
                                        </a>
                                        <a className="btn btn-small btn-secondary choose_file mr-2 color-picker" href="#">
                                            <i className="fas fa-paint-brush icon-size "></i>
                                        </a>
                                    </div>
                                    <div className="col-6 text-right align-items-center">
                                        <div className="btn btn-small btn-secondary choose_file mr-2">
                                            <span> <i className="fas fa-images icon-size"></i></span>
                                            <input type="file" name="fileupload" className="upload-image"></input>
                                        </div>
                                        <a className="btn btn-small btn-secondary choose_file mr-2" href="#" onClick={this.toggle}>
                                            <i className="fas fa-tags icon-size "></i>
                                        </a>
                                        <a className="btn btn-small btn-secondary choose_file" href="#" onClick={this.handleClick}>
                                            <i className="far fa-save icon-size "></i>
                                        </a>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

        
                {/* modal */}
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose}>
                    <ModalHeader toggle={this.toggle}>Add Tag</ModalHeader>
                    <ModalBody>
                        {/* <Input type="textarea" placeholder="Add tag" rows={5} /> */}
                        <AddTagsButton addTag={this.addTag} newTag={this.newTag} tags={this.state.tags}></AddTagsButton>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}

export default MainEntry;