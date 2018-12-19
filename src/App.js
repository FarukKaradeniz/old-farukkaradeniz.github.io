import React, { Component } from 'react';
import SocialList from './SocialList'
import Info from './Info'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Info />
        <SocialList />
      </div>
    );
  }
}

export default App;
