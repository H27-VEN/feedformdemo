/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { HelpBlock } from 'react-bootstrap';
import './FormWarning.css';

const formWarning = props => <HelpBlock bsClass="warning">{props.msg}</HelpBlock>;

formWarning.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default formWarning;
