import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';

class ProfileContainer extends Component{
	constructor(){
		super()

		this.state = {
			isLoading: false,
			itemsData: []
		}
	}

	render(){
		return(
			//if true show <Loader /> else show <items />
			<Profile data={this.state.itemsData}/>
		)
	}

	componentDidMount(){
		let items_data = 'http://localhost:3001/items';
		let users_data = 'http://localhost:3001/users';
		let urls = [items_data, users_data];
		
		this.setState({isLoading:true})

		Promise.all(urls.map(url =>
			fetch(url).then(resp => resp.json())
		)).then(data => {
			const [items, users] = data;
			let itemsWithOwners = items.map(item =>{
				let owners = users.find(user => item.itemowner == user.id)
				item.itemowner = owners;
				return item;
			})
			this.setState({itemsData: itemsWithOwners, isLoading: false});
		}).catch((err) => {
			console.log(err);
		})
	}
}

ProfileContainer.propTypes = {

};

export default ProfileContainer;