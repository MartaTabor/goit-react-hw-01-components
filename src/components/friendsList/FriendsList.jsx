import PropTypes from 'prop-types';

export const FriendsList = ({ friends, index }) => {
  return (
    <ul className="friends">
      {friends.map(friend => (
        <li className="item" key={friend.id || index}>
          <span
            className={friend.isOnline ? 'status online' : 'status offline'}
          >
            {friend.isOnline}
          </span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  isOline: PropTypes.bool,
};
