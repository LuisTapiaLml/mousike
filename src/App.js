import React from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
} from "react-router-dom";

import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Main } from './components/layout/Main';

import './styles/mousike.scss';
import { AudioState } from './context/audio/AudioState';
import { Player } from './components/layout/Player';

export const App = () => {
  return ( 
    <AudioState>
      <BrowserRouter>
        <div className="principal_container">
          <Header/>
          <div className="secondary_container">
            <Sidebar/>
            <Main/>
          </div>
          <Player/>
        </div>
      </BrowserRouter>
    </AudioState>
  )
}
