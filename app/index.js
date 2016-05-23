import './app.global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Screen1 from './screens/screen1/';
import Screen2 from './screens/screen2/';
import Wrapper from './components/wrapper/';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';


class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
          <Router history={hashHistory}>
            <Route path="/" component={Wrapper}>
              <Route path="/screen1" component={Screen1} />
              <Route path="/screen2" component={Screen2} />
              <IndexRedirect to="/screen1" />
            </Route>
          </Router>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));