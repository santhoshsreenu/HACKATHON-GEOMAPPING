import React, { Component } from 'react';
//import '../../App.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap';
import {GoogleMap} from 'google-maps-react';
import Header from './Header';
import SideMenu from './SideMenu';
import scriptLoader from 'react-async-script-loader';

class NewUser extends Component{
    constructor(props){
        super(props);
        this.state={
            Latitude:0,
            Longitude:0,
            address:'',
            stateCd:'',
            zip:'',
            city:''
        };
        this.onLatitudeChange = this.onLatitudeChange.bind(this);
        this.onLongitudeChange = this.onLongitudeChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
        this.onZipChange = this.onZipChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onLatitudeChange(event){
        this.setState({Latitude:event.target.value});
    }
    onLongitudeChange(event){
        this.setState({Longitude:event.target.value});
    }
    onAddressChange(event){
        this.setState({address:event.target.value});
    }
    onCityChange(event){
        this.setState({city:event.target.value});
    }
    onStateChange(event){
        this.setState({stateCd:event.target.value});
    }
    onZipChange(event){
        this.setState({zip:event.target.value});
    }

    onSubmit(event){
        if(event){
            const google = window.google;
            var geocoder = new google.maps.Geocoder();
            var address= this.state.address+","+this.state.city+","+this.state.stateCd+","+this.state.zip
            geocoder.geocode({address:address}, function(results, status){
                if(status ===google.maps.GeocoderStatus.ok){
                    var Latitude = results[0].geometry.location.lat();
                    var Longitude = results[0].geometry.Longitude.lng();
                    alert("Latitude"+Latitude+"\n Longitude"+Longitude);
                    var myLatLng = new google.maps.LatLng(Latitude, Longitude);
                    var marker =new google.maps.Marker({
                        position:myLatLng,
                        title:"Hello world",
                        draggable:true
                    });
                    
                    var map=new window.google.maps.Map(document.getElementById("map"),
                    {
                        zoom:12,
                        center:{lat:Latitude, lng:Longitude}
                    });
                    marker.setMap(map);
                    var marObj=marker.getPosition();
                    alert(JSON.stringify(marObj));
                }else{
                    alert("Request Failed")
                }
            });
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <div id="wrapper">
                    <SideMenu/>
                    <div id="content-wrapper">
                        <div className="container-fluid"> 
                            <div className="card mb-3">
                                <div className="card-header">Exisiting User's</div>
                                <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zip</th>
                    <th>Action's</th>
                  </tr>
                </thead>
                
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Jessica </td>
                    <td>Female</td>
                    <td>1st street</td>
                    <td>Virginia</td>
                    <td>20203</td>
                    <td><i class="fa fa-edit"></i> &nbsp;<i class="fa fa-trash"></i></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Sandi </td>
                    <td>Female</td>
                    <td>1st street</td>
                    <td>Phoenix</td>
                    <td>85248</td>
                    <td><i class="fa fa-edit"></i> &nbsp;<i class="fa fa-trash"></i></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>John </td>
                    <td>Male</td>
                    <td>3rdstreet</td>
                    <td>Maryland</td>
                    <td>20701</td>
                    <td><i class="fa fa-edit"></i> &nbsp;<i class="fa fa-trash"></i></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Christy </td>
                    <td>Female</td>
                    <td>4th street</td>
                    <td>Nevada</td>
                    <td>89126</td>
                    <td><i class="fa fa-edit"></i> &nbsp;<i class="fa fa-trash"></i></td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}

export default scriptLoader([
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyA6vKL6Q4u5ZhGAJ1YOMkQZ13pxCUXOe9k"
])(NewUser);