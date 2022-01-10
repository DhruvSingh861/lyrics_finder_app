import React from 'react'
import { Link } from 'react-router-dom';

const Track = (props) =>{
    return(
        <div className="col-md-6">
            <div className='card shadow-sm mb-4'>
                {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}

                <div className="card-body">
                    <h4><i class="fas fa-music"></i><b> {props.track.track_name}</b></h4>
                    <br/>
                    <h6><i class="fas fa-compact-disc"></i><b> Ablum: </b>  {props.track.album_name}</h6>
                    <h6><i class="fab fa-artstation"></i><b> Artist: </b>  {props.track.artist_name}</h6>
                    <br/>
                    <Link className="btn btn-lg w-100 btn-dark" to={`lyrics/track/${props.track.track_id}`}>
                        Lyrics
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Track;