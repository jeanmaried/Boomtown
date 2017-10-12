import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router-dom';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {Buttons} from '../Buttons/Buttons';
import Dropdown from '../Buttons/Dropdown';
import AutoCompleted from './AutoComplete';
import logo from '../../images/boomtown-logo.svg';
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
const HeaderBar = () => (
  <div className="header flex justify-between flex-wrap">
    <div className="logo flex justify-end">
      <Link to=""><img src={logo} alt="Boomtown Logo" /></Link>
      <Dropdown />
    </div>
    <div className="width">
    <Buttons/>
    </div>
  </div>
);

export default HeaderBar;