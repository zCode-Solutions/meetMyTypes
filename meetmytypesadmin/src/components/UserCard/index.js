import React from 'react';
import blankAvater from './blankAvatar.png'

const UserCard = props => {
    return (
        <div className='user-card'>
            <img src={blankAvater} alt="Avatar" />
            <div>Name: {props.name}</div>
            <div>Love Type: {props.loveType}</div>
        </div>
    )
}

export default UserCard;