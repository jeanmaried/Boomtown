import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import differenceInDays from 'date-fns/difference_in_days'

const ItemCard = ({item}) => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 
    if(mm<10) {
        mm = '0'+mm
    }
    today = yyyy + "-" + mm + "-" + dd;

    String.prototype.trunc = String.prototype.trunc ||
    function(n){
        return (this.length > n) ? this.substr(0, n-1) : this;
    };

    let timeCreated = item.created.trunc(11);

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
            subtitle={`${differenceInDays(today, timeCreated)} days ago`}
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