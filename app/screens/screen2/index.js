import './styles.less';
import React from 'react';
import { browserHistory, Link } from 'react-router';


class Screen2 extends React.Component {
  constructor(props) {
    super(props);
  }
  
  goToScreen1 = () => {
    browserHistory.push('/screen1');
  }

  render() {
    return (
      <div className="screen2-container">
        Hello World React. Screen 2.
        <br/>
        <Link to="/screen1"><button type="button">Go To Screen 1</button></Link>
        <img src="./assets/images/flower.png"/>
        {/* (process.env.HOT) ? './assets/images/flower.png' : '../dist/bundle.js'; */}
      </div>
    );
  }
}

export default Screen2;
