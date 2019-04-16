import React from 'react';
import PropTypes from 'prop-types';

const Resultado = ({ title, operation }) => (
  <div className="resultado clearfix">
    <div>{title}</div>
    <div className="total">
      $ {Number(operation.toFixed(2)).toLocaleString('en-US')}
    </div>
  </div>
);

Resultado.propTypes = {
  title: PropTypes.string.isRequired,
  operation: PropTypes.number.isRequired,
};

export default Resultado;
