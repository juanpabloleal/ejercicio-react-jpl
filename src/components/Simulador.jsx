import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

class Simulador extends Component {
  static propTypes = {
    slider: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      step: PropTypes.number.isRequired,
      valueFormatter: PropTypes.func.isRequired,
    }),
  };

  state = {
    numberFormatted: this.props.slider.valueFormatter(),
  };

  formatValues = () => {
    this.setState({
      numberFormatted: this.props.slider.valueFormatter(),
    });
  };

  render() {
    const slider = this.props.slider;

    return (
      <div className="simulador monto clearfix">
        <h3>{slider.description}</h3>
        <input type="text" value={this.state.numberFormatted} />
        <div className="slider">
          <Slider
            min={slider.min}
            max={slider.max}
            step={slider.step}
            onChange={e => {
              this.props.changeSlider(slider.name, e);
              this.formatValues();
            }}
            value={slider.value}
          />

          <div className="min">{slider.valueFormatter(slider.min)}</div>
          <div className="max">{slider.valueFormatter(slider.max)}</div>
        </div>
      </div>
    );
  }
}

export default Simulador;
