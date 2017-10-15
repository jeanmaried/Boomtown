import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import './styles.css';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
          hintText={'Filter by Tag'}
        >
          <MenuItem value={1} primaryText="Filter by Tag"/>
          <MenuItem value={2} primaryText="Electronics" />
          <MenuItem value={3} primaryText="Household Items" />
          <MenuItem value={4} primaryText="Musical Instruments" />
          <MenuItem value={5} primaryText="Physical Media" />
          <MenuItem value={6} primaryText="Recreational Equipment" />
          <MenuItem value={7} primaryText="Sporting Goods" />
          <MenuItem value={8} primaryText="Tools" />
        </DropDownMenu>
        <br />
      </div>
    );
  }
}