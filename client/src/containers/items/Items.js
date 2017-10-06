import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ItemCardList from '../../components/ItemCardList/';

const Items = ({data}) => {
	return(
		<ItemCardList data={data}/>
	)
}

Items.propTypes = {

}

export default Items;