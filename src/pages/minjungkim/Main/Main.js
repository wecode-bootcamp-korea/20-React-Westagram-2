import React, { Component } from 'react';
import Nav from './components/Nav';
import MainContainer from './components/MainContainer';
import './Main.scss';

export class Main extends Component {
  render() {
    return (
      <div className="main_mjk">
        <Nav />
        <MainContainer />
      </div>
    );
  }
}

export default Main;
