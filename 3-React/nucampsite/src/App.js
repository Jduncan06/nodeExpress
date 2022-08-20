import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import CampsiteCard from './features/campsites/CampsiteCard';
import {CAMPSITES} from './app/shared/CAMPSITES';

function App() {
  return (
    <div className="App">
     <Navbar dark color='primary' sticky='top' expand='md'>
               <Container>
                    <NavbarBrand href='/'>
                        <img src={NucampLogo} alt='nucamp logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
           <CampsiteCard campsite={CAMPSITES[0]}/>
    </div>
  );
}

export default App;