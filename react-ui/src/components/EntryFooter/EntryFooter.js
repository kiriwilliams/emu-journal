import React, { Component } from "react";
import Pickr from '@simonwep/pickr';
import '../MoodBlock/pickr.min.css';


class EntryFooter extends Component {
    state = {
        editing: true,
        newTag: ""
    }

    componentDidMount() {
        this.setState({editing: this.props.editing});
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
                    save: false
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
                this.props.handleColor(color);
                // this.updateTextColor(color);
            })
            .on('swatchselect', (...args) => {
                let color = args[0].toHEXA().toString();
                console.log('swatch', color);
                this.props.handleColor(color);
                // this.updateTextColor(color);
            })
            .on('save', (...args) => {
                let color = args[0].toHEXA().toString();
                console.log('save', color);
                this.props.handleColor(color);
                // this.updateTextColor(color);
            });   
    }

    saveEntry = (editingState) => {
        this.props.editingState(false);
        this.setState({ editing: editingState });
        this.props.handleClick();
    }

    editMode = (editingState) => {
        this.setState({ editing: editingState });
        this.props.editingState(editingState);
    }

    tagChange = (event) => {
        this.setState({ newTag: event.target.value });
    }

    addTag = () => {
        this.props.addTag(this.state.newTag);
        this.setState({ newTag: "" });
    }

    setVisibility = (element) => {
        if (this.state.editing) {
            switch (element) {
                case "editing":
                    return { display: "block" }
                case "edit":
                    return { display: "none" }
                default: 
                    return;
            }
        }
        else {
            switch (element) {
                case "editing":
                    return { display: "none" };
                case "edit":
                    return { display: "block" };
                default:
                    return;
            }
        }
    }

    render() {
        return (
            <div className="row " >
                <div className="col-12 col-sm-7 text-right align-items-center" style={this.setVisibility("editing")}>
                    {/* TAGS */}
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text choose_file mt-0"><i className="fas fa-tags icon-size"></i></span>
                        </div>

                        <input type="text" className="form-control mt-0" onChange={this.tagChange} value={this.state.newTag} />
                        <div className="input-group-append btn btn-secondary input-group-text" onClick={this.addTag}> Add Tag</div>

                    </div>
                </div> 
                
                {/* COLOR PICKER */}
                <div className="col-2 col-sm-2 text-right"  style={this.setVisibility("editing")}>
                    <button  type="button" className="btn btn-small btn-secondary choose_file mr-2 " href="#">
                        <i className="fas fa-paint-brush icon-size "></i>
                        </button>
                    <button type="button" className="btn btn-small btn-secondary choose_file mr-2 color-picker" href="#">
                    </button>
                </div>

                <div className="col-10 col-sm-3 text-right" style={this.setVisibility("editing")}>
                    
             
                    {/* SAVE BUTTON */}
                    <div className="btn btn-small btn-secondary choose_file" onClick={event => this.saveEntry(false)} >
                        <i className="far fa-save icon-size "></i>
                    </div>
                </div>


                {/* EDIT BUTTON */}
                <div className="col-12 text-right pb-3 " style={this.setVisibility("edit")}>
                    <div className="btn btn-small btn-secondary choose_file icon-size" onClick={event => this.editMode(true)}><i className="fas fa-user-edit icon-size"></i></div>
                 {/* DELETE BUTTON */}
                    <div className="btn btn-small btn-secondary choose_file icon-size ml-2" onClick={() => this.props.delete()}><i className="far fa-trash-alt icon-size"></i></div>
            
                </div>
               
                
            </div>
        )
    }
}

export default EntryFooter;