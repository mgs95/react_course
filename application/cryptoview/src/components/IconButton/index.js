import React, { Component } from 'react';
import Icon from '../Icon';
import './index.css';

class IconButton extends Component {
  state = {
    size: 0
  };

  /**
   * Sets the size to be 45% of the minimum between the width and the height.
   */
  componentDidMount() {
    const { width, height } = this.container.getBoundingClientRect();
    const size = Math.min(width, height);

    this.setState({
      size: size * 0.45
    });
  }

  render() {
    const { icon, color, onClickHandler } = this.props;

    return (
      <div
        className="IconButton"
        onClick={ onClickHandler }
        ref={el => this.container = el}
      >
        <Icon icon={icon} color={ color } size={ this.state.size } />
      </div>
    );
  }
}

export default IconButton;
