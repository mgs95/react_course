import React, { Component } from 'react';
import Title from '../Title';
import FormRadio from '../FormRadio';
import './index.css';

class Sidebar extends Component {
  render() {
    const style = {
      maxWidth: this.props.show ? '20%' : '0%'
    };

    const formOptions = [
      {name: '1 day', value: 'd1'},
      {name: '1 month', value: 'm1'},
      {name: '3 months', value: 'm3'},
      {name: '6 months', value: 'm6'},
      {name: '1 year', value: 'y1'},
      {name: '2 years', value: 'y2'},
      {name: '5 years', value: 'y5'},
      {name: 'Maximum range', value: 'max'},
    ];

    return (
      <div className="Sidebar" style={ style }>
        <Title text="Filters" />
        <FormRadio options={ formOptions } initialOption={ 'm1' }/>
      </div>
    );
  }
}

export default Sidebar;
