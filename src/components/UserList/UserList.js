import UserItem from "./UserItem";

const UserList = (props) => {
  return (
    <div>
      {props.items.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
