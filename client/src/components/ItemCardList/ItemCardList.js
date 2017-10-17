import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard/';
import Masonry from 'react-masonry-component';
import { Provider, connect } from 'react-redux';
import './styles.css'

class ItemCardList extends Component{
    render(){
        let data = this.props.itemsData;
        let tags = this.props.tags;
        // console.log(data);
        // console.log(tags.length);

        //tells us whether a tag should be shown
        const isTagVisible = tag => this.props.tags.includes( tag ); 

        //tells us whether an item has any tags that should be shown
        const doesItemHaveAnyVisibleTags = item => item.tags.some( isTagVisible ); 

        //filters only items that have any tags that should be shown
        const filteredItems = data.filter( doesItemHaveAnyVisibleTags );

        let newItems = filteredItems.length ? filteredItems : data;

        return (
            <Masonry className="masonry flex align-items-center">
                {newItems.map(item => <div className="item-width"><ItemCard key={item.id} item={item}/></div>)}
            </Masonry>
        )
    }
}

const mapStateToProps = state => ({
    tags: state.items.tags,
    itemsData: state.items.itemsData,
});
export default connect(mapStateToProps)(ItemCardList);
