import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Loader from '../../components/Loader'

class ProfileContainer extends Component{
	constructor(){
		super()

		this.state = {
			isLoading: false,
			itemsData: [],
			profileId: ""
		}
	}

	render(){
		return(
			<div>
				{this.state.isLoading ? <Loader /> : <Profile data={this.state.itemsData} profileId={this.state.profileId}/>}
			</div>
		)
	}

	componentDidMount(){
		let profileId = this.props.match.params.userid;
	}
}

ProfileContainer.propTypes = {

};

export default ProfileContainer;