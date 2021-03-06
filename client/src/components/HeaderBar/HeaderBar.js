import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router-dom';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {Buttons} from '../Buttons/Buttons';
import Dropdown from './Dropdown';
import { getDropDown } from '../../redux/modules/items';
import logo from '../../images/boomtown-logo.svg';
import { Provider, connect } from 'react-redux';
import store from '../../redux/store';
import './styles.css';
import '../../flex.css'

function handleTouchTap() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
class HeaderBar extends Component{
  render(){
    return(
      <div className="header flex justify-between flex-wrap">
      <div className="logo flex justify-end">
        <Link to=""><img src={logo} alt="Boomtown Logo" /></Link>
        <Dropdown onChange={this.props.getDropDown}/>
        {/* {if location !== /userid : <Dropdown onChange={getDropDown}/> : null} */}
      </div>
      <div className="width">
      <Buttons/>
      </div>
    </div>
    )
  }
} 

const mapStateToProps = state => ({
  tag: state.items.tag
});

export default connect(mapStateToProps, store)(HeaderBar);