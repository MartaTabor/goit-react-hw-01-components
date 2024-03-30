import { Profile } from './profile/Profile';
import user from './profile/user.json';
import { Statistics } from './statistics/Statistics';
import data from './statistics/data.json';
import { FriendsList } from './friendsList/FriendsList';
import friends from './friendsList/friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendsList friends={friends}></FriendsList>
    </div>
  );
};
