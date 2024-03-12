import "./style.css";
import {User} from "../../../types/types";

export function FriendsList(props: {friends: User[]}) {
  const { friends } = props;

  return (
    <div className="friendsList">
      {friends.map((user: User, index: number) => (
        <div key={index}>
          {`- ${user.first_name} ${user.last_name}`}
        </div>
      ))}
    </div>
  );
}
