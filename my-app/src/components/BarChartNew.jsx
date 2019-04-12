import React, { Component } from 'react';
import {earthquakeData} from './earthquake';
//var CanvasJSReact = require('./canvasjs.react');
import axios from 'axios';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let states = ["Alaska",
                  "Alabama",
                  "Arkansas",
                  "American Samoa",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Guam",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  " North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Puerto Rico",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Virgin Islands",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
				  "West Virginia",
				  "Wyoming"]
class BarChartNew extends Component {
    constructor(props) {
		super(props);
        this.state={data:[],newObj:[]};
        this.getOccurences = this.getOccurences.bind(this);
        //console.log(this.props.zip+"this.props.zip");
	}
	// componentDidMount(){
    //     axios.get('https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json')
    //     .then(response => {
    //         console.log(typeof response+"responseresponse");
    //         this.setState({ data: response.data.substring(260)});//.replace(/\//g, "")
    //         this.setState({ data: this.state.data.slice(0,-3)});
    //        //alert('coming..');
    //       //  console.log(typeof this.state.data+"this.state.datathis.state.data");
    //         //console.log(this.state.data);
    //        // JSON.parse("{"+this.state.data+"}");
    //         console.log(typeof this.state.data+"this.state.datathis.state.data");
    //       // console.log(this.state.data.slice(0,-3));
    //        //console.log(JSON.stringify(this.state.data.replace("\"","")));
            
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })       
    // }
    getOccurences(){
        var n;
         var res;
         var count;
        var newArr = earthquakeData();
        if(this.props.stateCd==='California'){
            newArr.forEach((featureObj,index)=>{
                n = featureObj.properties.place.indexOf(",");
                res = featureObj.properties.place.substring(n+2);
                if(this.props.stateCd && res === this.props.stateCd){
                    count++;
                    // console.log(index+"indexindex")
                    // console.log(count+"count")
                }
            });
        }
        else if (this.props.stateCd){
            count = Math.floor((Math.random() * 10) + 1);
        }
        return count;
            }
    //     var n;
    //     var res;
    //     var count=0;
    //     this.setState({ newObj: JSON.parse("{"+this.state.data+"}")});
    //    console.log("features[0]ssssssssssss",typeof this.state.newObj)
    // //const data = JSON.parse(this.state.data)
    // console.log(this.state.newObj)
    //    if(this.state.newObj){
    //     this.state.newObj.features.forEach((featureObj,index)=>{
    //         n = featureObj.properties.place.indexOf(",");
    //         res = featureObj.properties.place.substring(n+2);
    //         console.log(res+"resres");
    //         console.log("features[0]ssssssssssss",typeof res)
    //         if(res === 'California' && index<10){
    //             count++;
    //             console.log(index+"indexindex")
    //             console.log(count+"count")
    //         }
    //     })
    // }
    //     return count;
    
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: ""
			},
			axisX: {
				title: "Historical data",
				reversed: true,
			},
			axisY: {
				title: "",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  this.getOccurences(), label: "Earthquack" }
				]
			}]
		}
		return (
		<div>
            {/* {this.getOccurences} */}
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
}
 

export default BarChartNew;