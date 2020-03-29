import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './components/Menu';
import { Movies, Charts, About, Error404 } from './pages';

const Routes = () => (
  <Router>
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/charts" component={Charts} />
        <Route exact path="/about" component={About} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </>
  </Router>
);

export default Routes;
