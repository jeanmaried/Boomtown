import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Loader from '../../components/Loader'
import { fetchItemsAndUsers} from '../../redux/modules/items';
import { Provider, connect } from 'react-redux';
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

ProfileContainer.propTypes = {

};

const mapStateToProps = state => ({
    isLoading: state.items.isLoading,
    itemsData: state.items.itemsData,
    itemFilters: state.items.itemFilters
});
export default connect(mapStateToProps)(ProfileContainer);