import React,{Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Spinner } from "react-bootstrap";

class Lyrics extends Component{

    state={
        lyrics:[],
        track:[],
        image: ""
    }

    componentDidMount(){
        axios.get(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=547a2dabc696466d5c48fc1e29dd6f93`)
        .then(res=>{
            console.log(res.data);
            this.setState({lyrics : res.data.message.body.lyrics});

            axios.get(`http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=547a2dabc696466d5c48fc1e29dd6f93`)
            .then(res=>{
            console.log(res.data);
            this.setState({track : res.data.message.body.track});

            axios.get(`http://api.musixmatch.com/ws/1.1/album.get?album_id=${this.state.track.album_id}&apikey=547a2dabc696466d5c48fc1e29dd6f93`)
            .then(res=>{
                console.log("=-=-=-=-=");
            console.log(res.data);
        })
        .catch(error=>console.log(error));
        
            })
            .catch(error=>console.log(error));
        })
        .catch(error=>console.log(error));

        console.log(this.state)
    }


    render(){
        const {lyrics,track}=this.state;
        if(track===undefined || lyrics===undefined || Object.keys(track).length===0 || Object.keys(lyrics).length===0){
            return(
                <Spinner animation="border" variant="primary" 
                style={{margin:'80px auto',display:'block'}} />
            );
        }
        else{
            return (
                <React.Fragment>
                    <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
                    <div className='card'>
                        <h4 className='card-header'>
                            <strong>{track.track_name}</strong>
                        </h4>
                        <div className='card-body'>
                            <p className='card-text'>
                                {lyrics.lyrics_body}
                            </p>
                        </div>
                    </div>
                    <ul className='List-group mt-3 d-block p-2'>
                        <li className="list-group-item ">
                            <strong>Album name:  </strong>{track.album_name}
                        </li>

                        <li className="list-group-item ">
                            <strong>Artist Name:  </strong>{track.artist_name}
                        </li>

                        <li className="list-group-item ">
                            <strong>Music Genre:  </strong>{check(track)}
                        </li>

                        <li className="list-group-item ">
                            <strong>Release Date:  </strong>{track.first_release_date}
                        </li>
                        
                    </ul>
                </React.Fragment>
            );
        }
    }
}

function check(track){
    if(track.primary_genres.music_genre_list.length===0)
    return '';
    else
    return track.primary_genres.music_genre_list[0].music_genre.music_genre_name;
}

export default Lyrics;