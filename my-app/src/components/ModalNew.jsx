import React, { ChangeEvent, Component } from 'react';
import './../App.css';
import './Home';

class ModalNew extends Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }
   getPremium(){
    var magnitude =Math.floor((Math.random() * 6) + 1);
    var premium;
    if(magnitude<6){
        premium = Math.random() * 1000 + 1;
    }
    else{
        premium = Math.random() * 10000 + 1;
    }
    return premium;
   }
    render(){
        return(
            <div classNme="row align-center">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Validate Premium</button>
            </div>
            <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Premium Amount</h4>
                        </div>
                        <div class="modal-body">
                        <p>Risk assessment index is being calculated on the below parameters</p>
                            <table class="table">
                                <tr>
                                    <th>Zip</th>
                                    <td>{this.props.zip}</td>
                                </tr>
                                <tr>
                                    <th>Average Magnitude</th>
                                    <td>{Math.floor((Math.random() * 6) + 1)}</td>
                                </tr>
                                <tr>
                                    <th>No of Occurences</th>
                                    <td>10</td>
                                </tr>





                            </table>
                            <h4 className="text-align">{this.getPremium}</h4>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal">Ok</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        );
    }
}

export default ModalNew;