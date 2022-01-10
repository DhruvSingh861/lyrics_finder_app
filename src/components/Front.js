import React from "react";
import Tracks from "./frontComponents/Tracks";
import { Route, Routes } from "react-router-dom";
import Search from './frontComponents/Search'

const Front = () =>{
    return(
        <React.Fragment>
            <Search/>
            <Tracks/>
        </React.Fragment>
    );
}
export default Front;