/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { HelpBlock } from 'react-bootstrap';
import './FormWarning.css';

const formWarning = props => <HelpBlock bsClass={props.type}>{props.msg}</HelpBlock>;

formWarning.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['warning', 'success']),
};

export default formWarning;
