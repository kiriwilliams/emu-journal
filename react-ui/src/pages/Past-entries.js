import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Logout from "../components/Logout/Logout";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import Entry from "../components/Entry/Entry";
import API from "../utils/API";

class PastEntries extends Component {
    state = {
        entries: [],
        userID: window.sessionStorage.userID,
        addNew: false,
        redirect: false,
    }

    componentDidMount() {
        console.log("mounted");
        this.getEntries();
    }

    getEntries = () => {
        API.getEntries(window.sessionStorage.userID, window.sessionStorage.token)
            .then(entries => {
                if(entries.data.message === "401"){
                    // alert("You need to log in");
                    window.sessionStorage.setItem("alert","You need to log in");
                    this.setState({ destination: "/", redirect: true});
                    // this.renderRedirect();

                }
                else{
                    this.setState({ entries: entries.data });
                }
            })
            .catch(err => console.log(err));
    };

    showNewEntry = (show) => {
        console.log(show);
        if (show) {
            this.setState({ addNew: true });
        }
        else {
            this.setState({ addNew: false });
        }
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={this.state.destination} />
        }
      }
    render() {
        return (

            <div id="theme" className="background overflow-auto h-100">
                <Logout />
                <div className="h-100 row container m-auto p-2">
                    <Sidebar showNewEntry={this.showNewEntry} home={false} sidebarButton={"Add New Entry"} entries={this.state.entries}/>
                    {this.state.entries.length ? (
                        <div className="col-md-9 mb-2 overflow-auto noteContainer">
                            <Entry editing={true} noteID={"newEntry"} visible={this.state.addNew}> </Entry>
                            {this.state.entries.map(entry => (
                                <Entry
                                    key={entry._id}
                                    editing={false}
                                    visible={true}
                                    noteID={entry._id}
                                    date={entry.date}
                                    content={entry.content}
                                    color={entry.color}
                                    textColor={entry.textColor}
                                    mood={entry.mood}
                                    tags={entry.tags || []}
                                >

                                </Entry>
                            ))}
                        </div>
                    ) : (

                        <div className="col-md-9 mb-2 overflow-auto noteContainer">
                                <h2 className="text-center">No Entries</h2>
                                <Entry editing={true} noteID={"newEntry"} visible={this.state.addNew}> </Entry>
                            </div>

                        )}
                </div>

                <Footer />
                {this.renderRedirect()}
            </div>

        );
    }
}

export default PastEntries;