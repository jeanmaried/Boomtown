import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Loader from '../../components/Loader'
import { fetchUserItemsAndUsers, profileId } from '../../redux/modules/users';
import { Provider, connect } from 'react-redux';

class ProfileContainer extends Component{

	render(){
		return(
			<div>
				{this.props.isLoading ? <Loader /> : <Profile data={this.props.itemsData} profileId={this.props.match.params.userid}/>}
			</div>
		)
	}

	componentDidMount(){
		this.props.dispatch(fetchUserItemsAndUsers());
	}
}

ProfileContainer.propTypes = {

};

const mapStateToProps = state => ({
    isLoading: state.users.isLoading,
    itemsData: state.users.itemsData,
    itemFilters: state.users.itemFilters
});
export default connect(mapStateToProps)(ProfileContainer);