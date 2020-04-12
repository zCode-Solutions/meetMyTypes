import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import UserCard from '../../components/UserCard';

const UserSearchResults = ({ searchResults }) => {
  return (
    <Fragment>
      {searchResults[0] === undefined ? (
        <Title
          title="User Search Results"
          detail="No users found for this search"
        />
      ) : (
        <Fragment>
          <Title
            title="User Search Results"
            detail="This search matches the following user:"
          />
          <div className="user-cards">
            {searchResults.map((user) => (
              <Link to={'/edit-user/' + user.UID} key={user.UID}>
                <UserCard name={user.Nickname} loveType={user.LoveType} />
              </Link>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserSearchResults;
