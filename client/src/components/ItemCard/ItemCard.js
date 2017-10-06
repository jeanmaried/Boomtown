import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import './styles.css';

const ItemCard = ({item}) => {
    console.log(item);
    return (
    <div className="item-card">
        <Card>
        <CardMedia
            overlay={<CardTitle title="Unavailable" />}
        >
            <img src={item.imageurl} alt="" />
        </CardMedia>
        <CardHeader
            title={item.itemowner.fullname}
            subtitle={item.created}
            avatar={<Gravatar email={item.itemowner.email} />}
        />
        <CardTitle title={item.title}  subtitle={item.tags[0]}/>
        <CardText>
            <p>{item.description}</p>
        </CardText>
        </Card>
    </div>
    
  )};
  
  export default ItemCard;