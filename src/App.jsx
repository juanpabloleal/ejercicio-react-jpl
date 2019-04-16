import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Simulador from './components/Simulador';
import Resultado from './components/Resultado';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monto: {
        name: 'monto',
        description: 'Monto total',
        value: 25500,
        min: 5000,
        max: 50000,
        step: 500,
        valueFormatter(number = this.value) {
          const separated = number
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
          return `$ ${separated}`;
        },
      },
      plazo: {
        name: 'plazo',
        description: 'Plazo',
        value: 13,
        min: 3,
        max: 24,
        step: 1,
        valueFormatter(number = this.value) {
          return number;
        },
      },
    };
  }

  handleSliderChange = (name, e) => {
    const object = this.state[name];
    object.value = e;
    this.setState({
      [name]: object,
    });
  };

  render() {
    return (
      <div className="wrap">
        <form>
          <h1>Simulá tu crédito</h1>

          <Simulador
            slider={this.state.monto}
            changeSlider={this.handleSliderChange}
          />
          <Simulador
            slider={this.state.plazo}
            changeSlider={this.handleSliderChange}
          />
          <Resultado
            title="Cuota fija por mes"
            operation={this.state.monto.value / this.state.plazo.value}
          />
          <button className="submit">Obtené crédito</button>
          <button className="detalle">Ver detalle de cuotas</button>
        </form>
      </div>
    );
  }
}

export default hot(module)(App);
