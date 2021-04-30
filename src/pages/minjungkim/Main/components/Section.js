import React, { Component } from 'react';

import Article from './Article';

class Section extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <Article />
        </section>
      </div>
    );
  }
}

export default Section;
