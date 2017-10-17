import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard/';
import Masonry from 'react-masonry-component';
import { Provider, connect } from 'react-redux';
import './styles.css'

class ItemCardList extends Component{
    render(){
        let data = this.props.itemsData;
        let tagsArray = this.props.tags;

        return (
            <Masonry className="masonry flex align-items-center">

                {data.filter((item) => {
                    let newItem = item.tags.map(tag => tag == tagsArray.map(tagArr => tagArr))
                console.log(newItem)
                })
                    // return <div className="item-width"><ItemCard key={newItem.id} item={newItem}/></div>
                }
            </Masonry>
        )
    }
}

const mapStateToProps = state => ({
    tags: state.items.tags,
    itemsData: state.items.itemsData,
});
export default connect(mapStateToProps)(ItemCardList);