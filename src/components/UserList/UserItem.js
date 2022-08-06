const UserItem = (props) => {
  return (
    <div>
      <div>{props.user.name}</div>
      <div>{props.user.age}</div>
    </div>
  );
};

export default UserItem;
