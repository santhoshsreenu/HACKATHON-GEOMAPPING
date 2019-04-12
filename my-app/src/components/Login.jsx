import React, { ChangeEvent, Component } from 'react';
import './../App.css';
import './Home';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:"",
            password:"",
        };
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }
    // componentDidMount(){
    //     axios.get('https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json')
    //     .then(response => {
    //         this.setState({ data: response.data });
    //         console.log(this.state.data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // }
    onUsernameChange(event){
        this.setState({userName: event.target.value});
    }
    onPasswordChange(event){
        this.setState({password: event.target.value});
    }
    onSubmit(event){
        event.preventDefault();
        console.log(event.password+ "eventevent")
        this.props.history.push("/newUser");
    }
    render(){
        console.log(this.state.userName+"..."+this.state.password)
        return(
            <div className="container">
                <div className="card card-login mx-auto- mt-5">
                    <div className="card-header">Login</div>                    
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userName"
                                        autoComplete= "off"
                                        value={this.state.userName}
                                        onChange={this.onUsernameChange}
                                    />
                                    <label htmlFor="inputEmail">User Name</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input
                                        id="password"
                                        type="password"
                                        className="form-control"
                                        aria-describedby="password-message"
                                        autoComplete="off"
                                        value={this.state.password}
                                        onChange={this.onPasswordChange}
                                    />
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-block"
                                type="submit"
                                disabled={!this.state.userName ||!this.state.password}
                                onClick={(event)=>this.onSubmit(event)}
                            >
                            Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;