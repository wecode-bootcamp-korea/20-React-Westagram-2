import React from 'react';
import Story from './Story/Story';
import StoryBottomNav from './StoryBottomNav/StoryBottomNav';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    return (
      <aside className="aside">
        <div className="myAccount">
          <img alt="wecode" src="/images/yurimkim/wecode.png" />
          <p>
            <span>wecode</span>wecode | 위코드
          </p>
        </div>
        <Story />
        <StoryBottomNav />
      </aside>
    );
  }
}

export default Aside;
