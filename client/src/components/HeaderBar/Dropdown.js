import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import * as actions from '../../redux/modules/items';

const tagsList = ['Electronics', 'Household Items', 'Musical Instruments',
'Physical Media', 'Recreational Equipment', 'Sporting Goods', 'Tools'];

class Dropdown extends Component {

  handleChange = (event, index, values) => this.props.getDropDown(values);

  menuItems(values) {
    return tagsList.map((tag) => (
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
    const values = this.props.tags;
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
  tags: state.items.tags,
});
export default connect(mapStateToProps, actions)(Dropdown);