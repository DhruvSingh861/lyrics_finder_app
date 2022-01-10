import React, { useState, useEffect, useContext,Component } from "react";
import axios from "axios";
import { Consumer } from "../../Context";


class Search extends Component{
    state={
        trackTitle:""
    };
    onChange=e=>{
        this.setState({trackTitle: e.target.value});
        console.log(this.state.trackTitle);
    }
    searchTrack=(dispatch,e)=>{
        console.log(this.state.trackTitle)
        e.preventDefault();
            axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=547a2dabc696466d5c48fc1e29dd6f93`)
            .then(res=>{
                console.log(res.data);
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list
                });
            })
            .catch(error=>console.log(error));
    }

    render(){
        return(
            <Consumer>
                {value=>{
                    const {dispatch} =value;
                    return(
                        <div className="card card-body mb-4 p-4">
                            <h1 className='display-6 text-center'> Search for a song</h1>
                            <form onSubmit={this.searchTrack.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input type='text' 
                                    className='form-control form-control-lg'
                                    placeholder="Search Songs by Title"
                                    name='trackTitle'
                                    defaultValue={this.state.trackTitle}
                                    onChange={this.onChange.bind(this)}>

                                      </input>
                                </div>
                                <button type='submit' className='btn btn-dark btn-lg w-100'>
                                <b>Search</b>
                                </button>
                            </form>
                        </div>
                        
                    );
                }}
            </Consumer>
        );
    }
}

export default Search;