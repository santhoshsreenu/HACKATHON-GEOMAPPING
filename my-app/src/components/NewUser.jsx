import React, { Component } from 'react';
//import '../../App.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap';
import Header from './Header';
import SideMenu from './SideMenu';
import ChartNew from './ChartNew';
import ModalNew from './ModalNew';
import BarChartNew from './BarChartNew';
//import NewMap from './NewMap';
import scriptLoader from 'react-async-script-loader';
import BarChart from './BarChart';
class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Latitude: 0,
            Longitude: 0,
            address: '',
            stateCd: '',
            zip: '',
            city: ''
        };
        this.onLatitudeChange = this.onLatitudeChange.bind(this);
        this.onLongitudeChange = this.onLongitudeChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
        this.onZipChange = this.onZipChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onLatitudeChange(event) {
        this.setState({ Latitude: event.target.value });
    }
    onLongitudeChange(event) {
        this.setState({ Longitude: event.target.value });
    }
    onAddressChange(event) {
        this.setState({ address: event.target.value });
    }
    onCityChange(event) {
        this.setState({ city: event.target.value });
    }
    onStateChange(event) {
        this.setState({ stateCd: event.target.value });
    }
    onZipChange(event) {
        this.setState({ zip: event.target.value });
    }

    onSubmit(event) {
        if (event) {
            const google = window.google;
            var geocoder = new google.maps.Geocoder();
            var address = this.state.address + "," + this.state.city + "," + this.state.stateCd + "," + this.state.zip
            geocoder.geocode({ address: address }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var Latitude = results[0].geometry.location.lat();
                    var Longitude = results[0].geometry.location.lng();
                    // alert("Latitude" + Latitude + "\n Longitude" + Longitude);
                    var myLatLng = new google.maps.LatLng(Latitude, Longitude);
                    var marker = new google.maps.Marker({
                        position: myLatLng,
                        title: "Hello world",
                        draggable: true
                    });

                    var map = new window.google.maps.Map(document.getElementById("map"),
                        {
                            zoom: 12,
                            center: { lat: Latitude, lng: Longitude }
                        });
                    marker.setMap(map);
                    var marObj = marker.getPosition();

                    //alert(JSON.stringify(marObj));
                } else {
                    alert("Request Failed")
                }
            });
        }
    }
    render() {


        return (
            <div>
                <Header />
                <div id="wrapper">
                    <SideMenu />
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <div className="card mb-3">
                                <div className="card-header">New Customer Registration</div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group row">
                                            <label htmlFor="submittedDate" className="col-sm-4">
                                                First Name
                                            </label>
                                            <div className="col-sm-8">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="status" className="col-sm-4">
                                                Last Name
                                            </label>
                                            <div className="col-sm-8">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="status"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="status" className="col-sm-4">
                                                Gender
                                            </label>
                                            <div className="col-sm-8">
                                                <select
                                                    className="form-control"
                                                    id="btnPiller"
                                                    placeholder="select One"
                                                    name="framework1"
                                                >
                                                    <option value="">Select One</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="status" className="col-sm-4">
                                                Address/Street
                                            </label>
                                            <div className="col-sm-8">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="status"
                                                    value={this.state.address}
                                                    onChange={this.onAddressChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="status" className="col-sm-4">
                                                City
                                            </label>
                                            <div className="col-sm-8">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="status"
                                                    value={this.state.city}
                                                    onChange={this.onCityChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="status" className="col-sm-4">
                                                State
                                            </label>
                                            <div className="col-sm-8">
                                                <select
                                                    className="form-control"
                                                    id="btnPiller"
                                                    placeholder="select One"
                                                    value={this.state.stateCd}
                                                    onChange={this.onStateChange}
                                                    name="framework1"
                                                >
                                                    <option value="">Select One</option>
                                                    <option value="AL">Alabama</option>
                                                    <option value="AK">Alaska</option>
                                                    <option value="AZ">Arizona</option>
                                                    <option value="AR">Arkansas</option>
                                                    <option value="CA">California</option>
                                                    <option value="CO">Colorado</option>
                                                    <option value="CT">Connecticut</option>
                                                    <option value="DE">Delaware</option>
                                                    <option value="DC">District Of Columbia</option>
                                                    <option value="FL">Florida</option>
                                                    <option value="GA">Georgia</option>
                                                    <option value="HI">Hawaii</option>
                                                    <option value="ID">Idaho</option>
                                                    <option value="IL">Illinois</option>
                                                    <option value="IN">Indiana</option>
                                                    <option value="IA">Iowa</option>
                                                    <option value="KS">Kansas</option>
                                                    <option value="KY">Kentucky</option>
                                                    <option value="LA">Louisiana</option>
                                                    <option value="ME">Maine</option>
                                                    <option value="MD">Maryland</option>
                                                    <option value="MA">Massachusetts</option>
                                                    <option value="MI">Michigan</option>
                                                    <option value="MN">Minnesota</option>
                                                    <option value="MS">Mississippi</option>
                                                    <option value="MO">Missouri</option>
                                                    <option value="MT">Montana</option>
                                                    <option value="NE">Nebraska</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="NH">New Hampshire</option>
                                                    <option value="NJ">New Jersey</option>
                                                    <option value="NM">New Mexico</option>
                                                    <option value="NY">New York</option>
                                                    <option value="NC">North Carolina</option>
                                                    <option value="ND">North Dakota</option>
                                                    <option value="OH">Ohio</option>
                                                    <option value="OK">Oklahoma</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="PA">Pennsylvania</option>
                                                    <option value="RI">Rhode Island</option>
                                                    <option value="SC">South Carolina</option>
                                                    <option value="SD">South Dakota</option>
                                                    <option value="TN">Tennessee</option>
                                                    <option value="TX">Texas</option>
                                                    <option value="UT">Utah</option>
                                                    <option value="VT">Vermont</option>
                                                    <option value="VA">Virginia</option>
                                                    <option value="WA">Washington</option>
                                                    <option value="WV">West Virginia</option>
                                                    <option value="WI">Wisconsin</option>
                                                    <option value="WY">Wyoming</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="status" className="col-sm-4">
                                                Zip
                                            </label>
                                            <div className="col-sm-8">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="status"
                                                    value={this.state.zip}
                                                    onChange={this.onZipChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-4" />
                                            <div className="col-sm-8">
                                                <button
                                                    className="btn btn-primary btn-block"
                                                    type="submit"
                                                    onClick={event => this.onSubmit(event)}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div id="map" style={{ height: "415px" }} />
                                    </div>

                                </div>
                                {/* <ChartNew stateCd={this.state.stateCd}
                                    zip={this.state.zip} /> */}
                                <BarChartNew stateCd={this.state.stateCd}/>

                                <ModalNew zip={this.state.zip}/>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        );
    }
}

export default scriptLoader([
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyA6vKL6Q4u5ZhGAJlYOMkQZ13pxCUXOe9k"
])(NewUser);