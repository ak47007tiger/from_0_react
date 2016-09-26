import 'babel-polyfill';
import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';
import styles from './index.css';

class App extends Component{
  constructor(props, context) {
    super(props, context);
    let lis = [];
    for (let i = 0; i < 10; i++){
      lis.push(<li key={i}>{i} this is a p tag</li>);
    }
    this.state = {
      lis: lis
    }
  }
  render(){
    return(
      <div>
        hello world
        123
        <ul style={{height: 100,width: 300,overflowY: 'auto',backgroundColor: '#4adde8'}}>
          {this.state.lis}
        </ul>
        <div className={styles.t}>
          test .t1234
          23f
        </div>
        <p>o</p>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
