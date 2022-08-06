import UserItem from "./UserItem";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.items.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
