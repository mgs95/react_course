import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  state = {
    showSidebar: true
  };

  toggleSidebar = () => {
    const showSidebar = this.state.showSidebar;

    this.setState({
      showSidebar: !showSidebar
    });
  };

  render() {
    return (
      <Fragment>
        <Header onButtonClick={ this.toggleSidebar }/>
        <div className="App-content">
          <Sidebar show={ this.state.showSidebar }/>
          <Dashboard />
        </div>
      </Fragment>
    );
  }
}

export default App;
