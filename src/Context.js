import React,{Component, useReducer} from "react";
import axios from "axios";

const Context = React.createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case 'SEARCH_TRACKS':
        return{
            ...state,
            track_list: action.payload,
            heading: 'Search Results'
        };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        track_list:[],
        heading: "Top Trending Tracks in India",
        dispatch: action=> this.setState(state=>reducer(state,action))
    }

    componentDidMount(){
        axios.get(`http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=20&country=in&f_has_lyrics=1&apikey=547a2dabc696466d5c48fc1e29dd6f93`)
        .then(res=>{
            this.setState({track_list: res.data.message.body.track_list});
        })
        .catch(error=>console.log(error));
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;