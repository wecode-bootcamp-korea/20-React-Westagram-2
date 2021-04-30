import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import daseulleeLogin from './pages/daseullee/Login/Login';
import daseulleeMain from './pages/daseullee/Main/Main';
import minjungkimLogin from './pages/minjungkim/Login/Login';
import minjungkimMain from './pages/minjungkim/Main/Main';
import wonyoungchoLogin from './pages/wonyoungcho/Login/Login';
import wonyoungchoMain from './pages/wonyoungcho/Main/Main';
import yurimkimLogin from './pages/yurimkim/Login/Login';
import yurimkimMain from './pages/yurimkim/Main/Main';
import './pages/minjungkim/Style/Common_mjk.scss';
import './pages/minjungkim/Style/Reset_mjk.scss';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Logindsl" component={daseulleeLogin} />
          <Route exact path="/maindsl" component={daseulleeMain} />
          <Route exact path="/Loginmjk" component={minjungkimLogin} />
          <Route exact path="/mainmjk" component={minjungkimMain} />
          <Route exact path="/Loginwyc" component={wonyoungchoLogin} />
          <Route exact path="/mainwyc" component={wonyoungchoMain} />
          <Route exact path="/Loginyrk" component={yurimkimLogin} />
          <Route exact path="/mainyrk" component={yurimkimMain} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
