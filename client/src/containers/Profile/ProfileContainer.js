import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Loader from '../../components/Loader'
import { fetchItemsAndUsers} from '../../redux/modules/items';
import { Provider, connect } from 'react-redux';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import '../../flex.css';
import './styles.css'

class ProfileContainer extends Component{

	render(){
		return(
			<div className="profile flex justify-center">
				<div>
				{this.props.isLoading ? <Loader /> : <Profile data={this.props.itemsData} profileId={this.props.match.params.userid}/>}
				</div>
			</div>
		)
	}

	componentDidMount(){
		this.props.dispatch(fetchItemsAndUsers());
	}
}

const userQuery = gql`
	query getUser($id: String) {
		user(id: $id) {
			id
			email
			fullname
			bio
			item{
				id
				title
				imageurl
				description
				tags{
					title
				}
				created
				borrower {
					fullname
				}
			}
			borrowed {
				title
				itemowner {
					fullname
				}
			}
		}
	}
`

ProfileContainer.propTypes = {

};

const mapStateToProps = state => ({
    isLoading: state.items.isLoading,
    itemsData: state.items.itemsData,
    itemFilters: state.items.itemFilters
});
const ItemsContainerWithData = graphql(userQuery, {
	options: (ownProps) => ({
		variables: {
			id: ownProps.match.params.userid // this gets the id from the url. It will then pass it to the query i am making as the id variable (you can get rid of this.props.match.params.userid)
		}
	})
})(ProfileContainer);
// export default connect(mapStateToProps)(ProfileContainer);