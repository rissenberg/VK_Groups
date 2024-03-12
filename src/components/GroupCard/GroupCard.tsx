import "./style.css";
import {Group} from "../../types/types";
import React, {useState} from "react";
import {FriendsList} from "./FriendsList/FriendsList";

export function GroupCard(props: Group) {
  const [showFriends, setShowFriends] = useState(false);

  const avatarStyle = {
    backgroundColor: props.avatar_color ?? 'none',
    border: props.avatar_color ? '2px solid #555' : 'none',
  };

  const handleShowFriends = () => {
    setShowFriends(prev => !prev);
  }

  return (
    <div className="groupCard">
      <div className="groupAvatar" style={avatarStyle}/>
      <div className="groupInfo">
        <div>{props.name}</div>
        <div>{props.closed ? 'Открытая группа' : 'Закрытая группа'}</div>
        <br/>
        <div>
          {`${props.members_count} участников`}
          {props.friends && `, ${props.friends.length} друзей`}
          {props.friends &&
            <button className="showFriendsButton" onClick={handleShowFriends}>
              {showFriends ? 'скрыть' : 'показать'}
            </button>
          }
        </div>
        {showFriends && props.friends && <FriendsList friends={props.friends} />}
      </div>
    </div>
  );
}
