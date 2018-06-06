/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
// import 'jquery/dist/jquery';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-select/dist/css/bootstrap-select.css';
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap-select/dist/js/bootstrap-select';

const formSelector = props => {
  const selectOptions = [];
  props.options.forEach(element => {
    selectOptions.push(<option value={element.split(' ')[0]}>{element}</option>);
  });
  return (
    <React.Fragment>
      <select className="selectpicker">{selectOptions}</select>
    </React.Fragment>
  );
};

formSelector.propType = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default formSelector;
