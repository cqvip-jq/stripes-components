import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Checkbox';

export default class CheckboxFilter extends React.Component {
  static propTypes = {
    label: PropTypes.node,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node,
        value: PropTypes.any,
      })
    ),
    selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  onChangeHandler = (e) => {
    
  }

  render() {
    const {
      options
    } = this.props;

    return (
      options.map(({ value, label }) => {
        return (
          <Checkbox
            checked={}
            value={value}
            onChange={this.onChangeHandler}
          />
        );
      })
    );
  }
}
