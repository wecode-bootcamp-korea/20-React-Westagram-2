import React from 'react';
import Aside from '../Aside/Aside';
import Feeds from '../Feeds/Feeds';
import './MainSection.scss';

class MainSection extends React.Component {
  render() {
    return (
      <main className="mainSection">
        <Feeds />
        <Aside />
      </main>
    );
  }
}

export default MainSection;
