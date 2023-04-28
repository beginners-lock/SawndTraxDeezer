import React, { Component } from 'react';
import './../App.css';

class First extends Component{
    componentDidMount(){
        let url = "https://connect.deezer.com/oauth/auth.php?app_id=600624&redirect_uri=https://beginners-lock.github.io/SawndTraxDeezer/home&perms=basic_access&response_type=token";
        //let url = "https://api.deezer.com/search/artist/?q=Eminem&index=0&limit=60&";
        fetch(url, {
            method: 'GET',
        }).then((response)=>{
            console.log(response);
        });
    }

    render(){
        return(
            <div id="homepage">
                First
            </div>
        );
    }
}

export default First;