import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        const style = null;
        if (isOnline) {
          // style = зеленый
        } else {
          // style = красный
        }
        return (
          <li class="item" key={id}>
            <img src={avatar} alt="User avatar" className="avatar" />
            <p class="name">{name}</p>
            <span class="status" style={style}>
              {isOnline}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
