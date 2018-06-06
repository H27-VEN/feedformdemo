/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './FormHeader.css';

const formHeader = props => (
  <div className="page-content-header">
    <div className="page-content-header-title no-found-title">
      <h1>{props.formHeaderTitle}</h1>
      <p>{props.formSubtitle}</p>
    </div>
  </div>
);

formHeader.propTypes = {
  formHeaderTitle: PropTypes.string,
  formSubtitle: PropTypes.string,
};

formHeader.defaultProps = {
  formHeaderTitle: 'Add Feed',
  formSubtitle:
    'Add a RSS feed by selecting the frequency and appending hashtags you want. Content will automatically be read and added to your queue.',
};
export default formHeader;
