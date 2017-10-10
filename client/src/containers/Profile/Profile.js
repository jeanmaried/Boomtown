import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileCard from '../../components/ProfileCard/';

const Profile = ({data}) => {
	return(
		<ProfileCard data={data}/>
	)
}

Profile.propTypes = {

}

export default Profile;