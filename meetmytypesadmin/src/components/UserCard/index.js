import React from 'react';
import blankAvater from './blankAvatar.png';

const UserCard = props => {
  return (
    <div className="user-card">
      <img src={blankAvater} alt="Avatar" />
      <div>
        <span>Name:</span> <span>{props.name}</span>
      </div>
      <div>
        <span>Love Type:</span>
        <span> {props.loveType}</span>
      </div>
    </div>
  );
};

export default UserCard;
