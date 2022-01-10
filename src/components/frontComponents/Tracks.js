import React,{ Component } from "react";
import {Consumer} from '../../Context';
import { Spinner } from "react-bootstrap";
import Track from "./Track";
import { Row } from "react-bootstrap";
import axios from "axios";

class Tracks extends Component {
    render(){
        return(
            <Consumer>
                {value=>{
                    console.log("value");
                    console.log(value);
                    if(value.track_list===undefined && value.track_list.length===0){
                        if(value.heading==='Search Results'){
                            return (
                                <div className='text-center mt-5'>
                                    <h1 className="text-danger ">Ops! 0 results found :(</h1>
                                    <h3>Try to be more specific</h3>
                                </div>
                            );
                        }
                        else{
                            return (
                                <Spinner animation="border" variant="primary" 
                                style={{margin:'80px auto',display:'block'}} />
                            );}
                        }
                    else{
                        return(
                            <React.Fragment>
                                <h3 className="text-center mb-4">{value.heading}</h3>
                                <Row>
                                    {value.track_list.map(item=>(
                                        <Track key={item.track.track_id} track={item.track} />
                                    ))}
                                </Row>
                            </React.Fragment>
                        );
                    }
                }}
            </Consumer>
        );
    }
}

export default Tracks;