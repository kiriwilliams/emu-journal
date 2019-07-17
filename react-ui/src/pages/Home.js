import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NewNote from "../components/NewNote/NewNote";
import Logout from "../components/Logout/Logout";
import MainEntry from "../components/MainEntry/MainEntry";
import Footer from "../components/Footer/Footer";
import Entry from "../components/Entry/Entry";
import Sidebar from "../components/Sidebar/Sidebar";
import API from "../utils/API";


class Home extends Component {
    state = {
        redirect: false,
        destination: "/past-entries",
        entries: []
    }

    componentDidMount() {
        this.getEntries();
    }

    getEntries = () => {
        API.getEntries(window.sessionStorage.userID, window.sessionStorage.token)
            .then(entries => {
                console.log(entries.data);
                if(entries.data.message === "401"){
                    // alert("You need to log in");
                    window.sessionStorage.setItem("alert","You need to log in");
                    this.setState({ destination: "/", redirect: true});
                    // this.renderRedirect();

                }
                else{
                    this.setState({ entries: entries.data });
                }
               
            }
            )
            .catch(err => console.log(err));
    };

    // if(window.sessionStorage.getItem("auth")){
    //     return (
    //         <div className="background">
    //             <div className="overflow-auto h-100">
    //             <Logout />

    //              <MainEntry />
    //             </div>

    //             {/* <Footer /> */}
    //         </div>

    //     );
    // }
    // else{
    //     return (
    //         <div>
    //             You gotta log in
    //         </div>
    //     )
    // }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={this.state.destination} />
        }
      }
      
      showPastEntries = () => {
          this.setState({redirect: true});
          this.renderRedirect();
      }
      logout = () => {
        // window.sessionStorage.setItem("username","");
        // window.sessionStorage.setItem("userID","");
        // window.sessionStorage.setItem("token","");
        // window.location.replace("/");
        console.log("click");
      }
      showNewEntry = (show) => {
        console.log(show);
        // if(show){
        //     this.setState({addNew: true});
        // }
        // else{
        //     this.setState({addNew: false});
        // }
    }
    render() {
        return(
            <div id="theme" className="background">
                <div className="overflow-auto h-100">
    
                <Logout logout={this.logout} />
                    <div className="h-100 row container m-auto p-2">
                    
                        <Sidebar showNewEntry={this.showNewEntry} home={true} sidebarButton={"Show Past Entries"} showPastEntries={this.showPastEntries} entries={this.state.entries}/>

                        <div className="col-md-9 mb-2">
    
                            <form>
                                <Entry editing={true} visible={true} />
                            </form>
                          
                            {this.state.entries.length ? (
                        <div className="noteContainer">
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
                        
                    </div>
    
                </div>
    
                <Footer />
                {this.renderRedirect()}
            </div>
    
        )
    }
    

}

export default Home;