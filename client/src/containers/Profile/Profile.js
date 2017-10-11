import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileCard from '../../components/ProfileCard/';

const Profile = ({data, profileId}) => {
	return(
		<ProfileCard data={data} profileId={profileId}/>
	)
}

Profile.propTypes = {

}

export default Profile;