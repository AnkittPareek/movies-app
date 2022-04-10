import React from "react";
import "./Details.css";
import "../../common/header/Header";
import Header from "../../common/header/Header.js";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";


class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <>
            <Header btnType="bookshow" variant="contained" buttonName="BOOK SHOW"/>
            
            <div className="backbtn"><Link to="/"><Typography >{"<"} Back to Home</Typography></Link></div>
            

            <div className="flex-container">

              <div className="leftDetail"> left 
                <img src="{}"></img>
              </div>
              <div className="middleDetail">middle </div>
              <div className="rightDetail"> right </div>
            </div>
        </>
    );
  }
}

export default Details;
