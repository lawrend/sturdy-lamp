import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import BaseContainer from './BaseContainer.js';
import IngredientsCheckerHome from './containers/checker/IngredientsCheckerHome';
import ErrorRoute from './components/ErrorRoute.js';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={BaseContainer} />
        <Route path="/checker" component={IngredientsCheckerHome} />
        <Route component={ErrorRoute} />
      </Switch>
    )
  }
};

export default withRouter(Routes);
