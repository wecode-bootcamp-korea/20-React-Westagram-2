import React from 'react';
import Nav from './Nav/Nav';
import Feed from './Feed/Feed';
import Aside from './Aside/Aside';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment className="mainyrk">
        <Nav />
        <div className="mainDiv">
          <section className="mainSection">
            <div>
              <Feed />
              <Feed />
            </div>
            <Aside />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
