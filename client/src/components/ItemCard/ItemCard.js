import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import {Button2} from '../Buttons/Buttons';
import distanceInWords from 'date-fns/distance_in_words';
import startOfToday from 'date-fns/start_of_today';
import './styles.css'

const ItemCard = ({item}) => {
    return (
    <div>
        <Card>
        <CardMedia
            overlay={item.borrower !== null ? <CardTitle title="Unavailable" /> : null}
        >
        <img src={item.imageurl} alt="" />
        </CardMedia>
        
        <Link to={`/profile/${item.itemowner.id}`}>
        <CardHeader
            title={item.itemowner.fullname}
            subtitle={`${distanceInWords(item.created, startOfToday())} ago`}
            avatar={<Gravatar email={item.itemowner.email} />}
        />
        </Link>
        <CardTitle title={item.title}  subtitle={item.tags}/>
        <CardText>
            <p>{item.description}</p>
        </CardText>
        {item.borrower == null ? <Button2 /> : null}
        </Card>
    </div>
    
  )};
  
  export default ItemCard;