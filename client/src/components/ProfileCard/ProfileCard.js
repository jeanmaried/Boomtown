import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Gravatar from 'react-gravatar';
import ItemCardList from '../ItemCardList';
import './styles.css';
import '../../flex.css'

const ProfileCard = ({data, profileId}) => {

    const newProfile = data.filter(item =>{
        let newProfile = item.itemowner.id == profileId;
        return newProfile;
    })

    let shared = 0;
    newProfile.map(user => shared += 1);

    let itemS = shared > 1 || shared == 0 ? "Items" : "Item";

    let borrowed = 0;
    data.map(item => item.borrower == profileId ? borrowed += 1 : null);

    const userName = newProfile.length > 0 ? newProfile[0].itemowner.fullname : null;
    const userBio = newProfile.length > 0 ? newProfile[0].itemowner.bio : null;
    const userPic = newProfile.length > 0 ? newProfile[0].itemowner.email : null;
    return (
        <div>
            <div className="card_info flex justify-between flex-wrap">
                <div>
                    <h1>{userName}</h1>
                    <p>{userBio}</p>
                </div>
                <div className="statsNpic flex justify-between align-items-center">
                    <div>
                        <div>
                            <p>{shared}</p>
                            <p>{`${itemS} shared`}</p>
                        </div>
                        <div>
                            <p>{borrowed}</p>
                            <p>{`${itemS} borrowed`}</p>
                        </div>
                    </div>
                    <div className="profile_pic">
                        {<Gravatar email={userPic} />}
                    </div>
                </div>
            </div>
            <Masonry className="masonry">
                <ItemCardList/>
            </Masonry>
        </div>
    )
}

export default ProfileCard;