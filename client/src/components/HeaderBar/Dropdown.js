import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {getDropDown} from '../../redux/modules/items';

const tags = ['Electronics', 'Household Items', 'Musical Instruments',
'Physical Media', 'Recreational Equipment', 'Sporting Goods', 'Tools'];

class Dropdown extends Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({values});

  menuItems(values) {
    return tags.map((tag) => (
      <MenuItem
        key={tag}
        insetChildren={true}
        checked={values && values.indexOf(tag) > -1}
        value={tag}
        primaryText={tag}
      />
    ));
  }

  render() {
    const {values} = this.state;
    return (
      <SelectField
        multiple={true}
        hintText="Filter by Tag"
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.items.tag,
});
export default connect(mapStateToProps)(Dropdown);