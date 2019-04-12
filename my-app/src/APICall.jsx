import React, { Component } from 'react';
import axios from 'axios';
export var geodata;
class APICall extends Component{
    constructor(props) {
        super(props);
        this.state = {data: []};
    }
    
    componentDidMount(){
        axios.get('https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json')
        .then(response => {
            this.setState({ data: response.data });
           console.log(JSON.stringify(this.state.data));
            
        })
        .catch(function (error) {
            console.log(error);
        })
       
    }
    getGeoData(){
        geodata=this.state.data;
    }
    render(){
        console.log(geodata +'geodata');
        
        return(
            <div>{this.getGeoData()}</div>
        );
    }
}
export default APICall;