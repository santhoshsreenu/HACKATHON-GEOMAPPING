import React, { Component } from 'react';
//var CanvasJSReact = require('./canvasjs.react');
import axios from 'axios';
import CanvasJSReact from './canvasjs.react';
import {getDisasterDataForAlaska} from './DisasterDataAlaska';
import {getDisasterDataForFlorida} from './DisasterDataFlorida';
import APICall,{geodata} from './../APICall';
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

//
class ChartNew extends Component {
	constructor(props) {
		super(props);
		this.state={data: []};
        //console.log(this.props.zip+"this.props.zip");
        this.toggleDataSeries = this.toggleDataSeries.bind(this);
        this.detailsByZip = this.detailsByZip.bind(this);
	}
	// componentDidMount(){
    //     axios.get('https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json')
    //     .then(response => {
	// 		this.setState({ data: response.data.substring(260)});
	// 		alert('coming..');
    //        console.log(JSON.stringify(this.state.data));
            
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })       
    // }
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
    }

    detailsByZip(){
		// var resData = this.state.data;
		// console.log(resData);
		// var modifiedData;
		// console.log(this.state.data);
		// if(this.state.data!=[]){
		// 	modifiedData = this.state.data.substring(268);
		// 	console.log(modifiedData+"modifiedDatamodifiedData");
		// }
        var dataArr = [];
        if(this.props.zip==='99901'){
            dataArr = getDisasterDataForAlaska();
		}
		else if(this.props.zip==='32277'){
			dataArr = getDisasterDataForFlorida();
		}
        return dataArr;
	}
	
	render() {
		
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "",
				fontFamily: "verdana"
			},
			axisY: {
				title: "Incidents",
				prefix: "",
				suffix: ""
			},
			toolTip: {
				shared: true,
				reversed: true
			},
			legend: {
				verticalAlign: "center",
				horizontalAlign: "right",
				reversed: true,
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: this.detailsByZip()
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
			</div>
		);
	}
}

export default ChartNew;