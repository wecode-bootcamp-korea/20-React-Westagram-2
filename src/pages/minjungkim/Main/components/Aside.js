import React, { Component } from 'react';
import User from './User';
import Footer from './Footer';
import Misc from './Misc';
import Sidebox from './Sidebox.js';

class Aside extends Component {
  render() {
    return (
      <aside className="aside">
        <User />
        <Sidebox />
        <Sidebox />
        <Misc />
        <Footer />
      </aside>
    );
  }
}

export default Aside;
