import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';

const ItemCard = ({item}) => {
    return (
    <div>
        <Card>
        <CardMedia
            overlay={<CardTitle title="Unavailable" />}
        >
            <img src={item.imageurl} alt="" />
        </CardMedia>
        <Link to={`/profile/${item.itemowner.id}`}>
        <CardHeader
            title={item.itemowner.fullname}
            /* subtitle={Moment(item.created).startOf('day').fromNow()}   */
            avatar={<Gravatar email={item.itemowner.email} />}
        />
        </Link>
        <CardTitle title={item.title}  subtitle={item.tags[0]}/>
        <CardText>
            <p>{item.description}</p>
        </CardText>
        </Card>
    </div>
    
  )};
  
  export default ItemCard;