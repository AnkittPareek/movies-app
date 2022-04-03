import React from "react";
import './Home.css'
import "../../common/header/Header"
import Header from "../../common/header/Header.js";
import SingleLineImageList from "./movieList";
import moviesData from "../../common/moviesData";


class Home extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = { data: moviesData };
    }

    render(){
        return(
            
                <div>
                    <Header />
                    <span className="heading">Upcoming Movies</span>
                    <SingleLineImageList moviesData={this.state.data}/>

                </div>
        );

    }
}  


export default Home;