import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './Items';
import Loader from '../../components/Loader';
import { fetchItemsAndUsers } from '../../redux/modules/items';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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

const itemsQuery = gql`
query getItems {
	items {
		id
		title
		imageurl
		description
		itemowner {
			id
			email
			fullname
		}
		created
		borrower {
			fullname
		}
	}
}`

const mapStateToProps = state => ({
    isLoading: state.items.isLoading,
    itemsData: state.items.itemsData,
    itemFilters: state.items.itemFilters
});
const ItemsContainerWithData = graphql(itemsQuery)(ItemsContainer)
export default connect(mapStateToProps)(ItemsContainerWithData);