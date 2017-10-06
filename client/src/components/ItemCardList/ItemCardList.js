import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard/';
import Masonry from 'react-masonry-component';
import './styles.css'

const ItemCardList = ({data}) => {
    return (
        <Masonry className="masonry">
            {data.map((item) => {
                return <div className="item-width"><ItemCard key={item.id} item={item}/></div>
            })}
        </Masonry>
    )
}

export default ItemCardList;