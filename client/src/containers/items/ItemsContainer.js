import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './Items';
import Loader from '../../components/Loader';
import { fetchItemsAndUsers } from '../../redux/modules/items';
import { Provider, connect } from 'react-redux';

class ItemsContainer extends Component{

	render(){
		return(
			<div>
				{this.props.isLoading ? <Loader /> : <Items data={this.props.itemsData}/>}
			</div>
		)
	}

	componentDidMount(){
		this.props.dispatch(fetchItemsAndUsers());
	}
}

ItemsContainer.propTypes = {

};

const mapStateToProps = state => ({
    isLoading: state.items.isLoading,
    itemsData: state.items.itemsData,
    itemFilters: state.items.itemFilters
});
export default connect(mapStateToProps)(ItemsContainer);