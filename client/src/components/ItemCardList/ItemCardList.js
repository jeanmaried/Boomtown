import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard/';
import Masonry from 'react-masonry-component';
import '../../flex.css';
import './styles.css'

const ItemCardList = ({data}) => {
    return (
        <Masonry className="masonry flex justify-around">
            {data.map((item) => {
                return <div className="item-width"><ItemCard item={item}/></div>
            })}
        </Masonry>
    )
}

export default ItemCardList;