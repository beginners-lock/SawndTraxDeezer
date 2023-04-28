import React, { Component } from 'react';
import './../App.css';

class First extends Component{
    componentDidMount(){
        let url = "https://connect.deezer.com/oauth/auth.php?app_id=600564&redirect_uri=https://http://localhost:3000/home&perms=basic_access&response_type=token";
        fetch(url).then((response)=>{
            return response.json();
        }).then((response)=>{
            return response;
        })
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