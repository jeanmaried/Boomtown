import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './Items';

class ItemsContainer extends Component{
	constructor(){
		super()

		this.state = {
			isLoading: false,
			itemsData: []
		}
	}

	render(){
		return(
			<Items data={this.state.itemsData}/>
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

ItemsContainer.propTypes = {

};

export default ItemsContainer;