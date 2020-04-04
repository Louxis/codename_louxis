import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../containers/Home';
import Wrapper from '../containers/Wrapper';

class Routes extends Component {
  render = () => {
      const {location} = this.props;
    return (
      <Wrapper>
        <Switch location={location}>
          <Route exact path="/home" component={Home} />
          <Redirect
            to="/home"
          />
        </Switch>
      </Wrapper>
    );
  }
}
export default withRouter(Routes);
