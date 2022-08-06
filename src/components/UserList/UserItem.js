import Card from "../UI/Card";

const UserItem = (props) => {
  return (
    <li>
      {props.user.name} ({props.user.age} years old)
    </li>
  );
};

export default UserItem;
