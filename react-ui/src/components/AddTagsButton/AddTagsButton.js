import React, { Component } from "react";

class AddTagsButton extends Component {
    state = {
        tagList: ["starter","banana"]
    }

    addTag = (event) => {
        this.setState({newTag: ""});
        this.props.addTag(event);
        this.setState({tagList: [...this.state.tagList, this.state.newTag]});
    }

    handleChange = (event) => {
        this.setState({newTag: event.target.value});
        this.props.newTag(event);
       
    }
    render() {
        return (
            <div className="form-group">
                <label htmlFor="tag">Tags: {this.state.tagList.map((tag) => <button className="btn btn-primary">{tag}</button>)}</label>
                <input
                    name="tag"
                    list="tags"
                    type="text"
                    className="form-control"
                    placeholder="Type in a descriptor tag"
                    id="tag"
                    value={this.state.newTag}
                    onChange={this.handleChange}
                    
                />
{/*                <datalist id="tags">
                    {this.tags.map(tag => (
                        <option value={tag} key={tag} />
                    ))}
                </datalist> */}
                <button type="button" onClick={this.addTag} className="btn btn-success">
                Add Tags
                </button>
            </div>//This will change to a dropdown that populates with the users previously used tags
        );
    }
}

export default AddTagsButton;