import React from 'react';
import Nav from './Components/Nav/Nav';
import MainSection from './Components/MainSection/MainSection';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <section className="mainPage">
        <Nav />
        <MainSection />
      </section>
    );
  }
}

export default Main;
