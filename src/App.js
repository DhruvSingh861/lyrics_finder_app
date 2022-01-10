import logo from './logo.svg';
import './App.css';
import Front from './components/Front';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from './Context';
import Lyrics from './components/frontComponents/Lyrics';



function App() {
  return (
    <Provider>
    <BrowserRouter>
    <React.Fragment>

    <Navbar bg="dark" variant="dark" >
    <Navbar.Brand className="mx-auto"><i class="fas fa-music"></i> Lyrics-Finder</Navbar.Brand>
    </Navbar>

    <div  style={{marginLeft:'130px',marginRight:'130px', marginTop:'50px'}}>
      <Switch>
        <Route exact path="/" component={Front}/>
        <Route path="/lyrics/track/:id" component={Lyrics}></Route>
      </Switch>
    </div>


  
    </React.Fragment>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
