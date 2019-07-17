import React, { Component } from "react";
import Calendar from "../Calendar/Calendar";
import MiniHistory from "../MiniHistory/MiniHistory";
import "./Sidebar.css"
import { HashLink as Link } from 'react-router-hash-link';

const pastEntries = "/past-entries";
const newEntry = "/past-entries#newEntry";
class Sidebar extends Component {
    state = {
        username: window.sessionStorage.username
    }

    render() {
        return (

            <div className="col-12 col-md-3 side-bar mb-2">
                <div className="row mb-1 bg-white border rounded border-dark">
                    <p className="mt-2 font text-dark m-auto p-2">{this.state.username}'s Journal</p>
                </div>
                <div className="row mb-1">
                        <div className="col-12 bg-white border rounded border-dark py-3 " onClick={() => this.props.home ? this.props.showPastEntries() : this.props.showNewEntry(true)}>
                        <Link to={this.props.home ? pastEntries : newEntry}>
                            <p className="sideBarFont "><i className={this.props.home ? "fas fa-book-open mr-1" : "fas fa-plus-circle mr-1"}></i> {this.props.sidebarButton}</p>
                            </Link>
                        </div>
                   
                </div>
                {/* <div className="row mb-1">
                    <div className="col-6 bg-white border rounded border-dark py-3 ">
                        <p className="sideBarFont "><i className="fas fa-calendar-alt "></i> Calendar</p>
                    </div>
                    <div class="col-6 bg-white border rounded border-dark py-3 ">
                        <p className="sideBarFont "><i className="fas fa-list-alt"></i> All entry</p>
                    </div>
                </div> */}
                <div className="row mb-1">
                    <div className="col-12 px-0">
                        <Calendar />
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-12 px-0 mini-entry">
                        <MiniHistory entries={this.props.entries}/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Sidebar;