import React, { Component } from 'react';
import './index.css';

class FormRadio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: this.props.initialOption
    };
  }


  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    })
  };

  render() {
    const inputs = this.props.options.map((option, idx) => (
      <label>
        <input
          type="radio"
          name="form-radio"
          value={ option.value }
          checked={ option.value === this.state.selectedOption }
          onChange={ this.handleOptionChange }
        />
        <span className="FormRadioCircle"/>
        { option.name }
      </label>
    ));

    return (
      <form className="FormRadio">
        { inputs }
      </form>
    );
  }
}

export default FormRadio;
