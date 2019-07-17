import React, {Component} from "react";

class Tags extends Component{


    render() {
        if(this.props.tags){
            return (
                <div className="row">
                    <div className="col-12 py-3">
                        Tags:  
                        {this.props.tags.map((tag, i) => { 
                            if(this.props.tags.length -1  === i){
                                return <span> {tag} </span>
                            }
                            return <span> {tag}, </span>
                            })
                        }
                    </div>
                </div>
            )
         }
         else{
            return(
                <div className="row">
                    <div className="col-12 py-3">
                        Tags: 
                    </div>
                </div>
            )
         }
    }

}

export default Tags;

