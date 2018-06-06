/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import 'jquery/dist/jquery';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-select/dist/css/bootstrap-select.css';
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap-select/dist/js/bootstrap-select';

class FormSelector extends Component {
  constructor(props) {
    super(props);
    // this.state = { [this.props.id]: this.props.options[0] };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    console.log('this is handle input of form selector');
    console.log('id:', event.target.id);
    console.log('value: ', event.target.value);

    // if (event.target.id === 'feedfrequency') {
    //   this.setState({
    //     feedfrequency: event.target.value,
    //   });
    // } else if (event.target.id === 'feedpost') {
    //   this.setState({
    //     feedpost: event.target.value,
    //   });
    // }

    // this.setState({
    //   [event.target.id]: event.target.value,
    // });
    console.log('state in form selector: ', this.state);
    this.props.changefunc(event);
  }

  render() {
    const selectOptions = [];
    this.props.options.forEach((element, index) => {
      if (index === 0) {
        selectOptions.push(
          <option key={index} value="" selected>
            {element}
          </option>,
        );
      } else {
        selectOptions.push(
          <option key={index} value={element}>
            {element}
          </option>,
        );
      }
    });

    return (
      <React.Fragment>
        <select id={this.props.id} className="selectpicker" onChange={this.handleInput}>
          {selectOptions}
        </select>
      </React.Fragment>
    );
  }
}

FormSelector.propType = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  changefunc: PropTypes.func,
};

export default FormSelector;
