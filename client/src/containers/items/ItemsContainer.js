import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './Items';

class ItemsContainer extends Component{
	constructor(){
		super()
	}

	render(){
		return(
			<Items />
		)
	}

}

ItemsContainer.propTypes = {

};

export default ItemsContainer;