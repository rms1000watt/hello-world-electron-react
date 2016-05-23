import './styles.less';
import React from 'react';
import { browserHistory, Link } from 'react-router';
// import RaisedButton from 'material-ui/RaisedButton';


class Screen1 extends React.Component {
  constructor(props) {
    super(props);
  }
  
  goToScreen2 = () => {
    browserHistory.push('/screen2');
  }

  render() {
    return (
      <div className="screen1-container">
        Hello World React. Screen 1. 
        <br/>
        <Link to="/screen2"><button type="button">Go To Screen 2</button></Link>
      </div>
    );
  }
}

export default Screen1;
