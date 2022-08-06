import { useState } from "react";
import Card from "../UI/Card";
import styles from "./InputForm.module.css";
import Button from "../UI/Button";

const InputForm = (props) => {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const nameInputHandler = (event) => {
    let name = event.target.value;
    setUser((prevUser) => {
      return {
        ...prevUser,
        name: name,
      };
    });
  };

  const ageInputHandler = (event) => {
    let age = event.target.value;
    setUser((prevUser) => {
      return {
        ...prevUser,
        age: age,
      };
    });
  };

  const newUserHandler = (event) => {
    event.preventDefault();
    if (user.name.trim().length === 0 || user.age.trim().length === 0) {
      return;
    }

    if (+user.age < 1) {
      return;
    }

    console.log(user);
    props.onNewUser(user);
    setUser({
      name: "",
      age: "",
    });
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={newUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user.name}
            onChange={nameInputHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={user.age}
            onChange={ageInputHandler}
          ></input>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default InputForm;
