import React from 'react';
import Nav from './Nav/Nav';
import Feed from './Feed/Feed';
import Aside from './Aside/Aside';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feedData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedData: data,
        });
      });
  }

  render() {
    console.log(this.state);
    const { feedData } = this.state;
    return (
      <React.Fragment className="mainyrk">
        <Nav />
        <div className="mainDiv">
          <section className="mainSection">
            <div>
              {feedData.map(el => {
                return (
                  <Feed
                    key={el.id}
                    userName={el.userName}
                    userImg={el.userImg}
                    feedImgUrl={el.feedImgUrl}
                    feedImgAlt={el.feedImgAlt}
                  />
                );
              })}
            </div>
            <Aside />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
