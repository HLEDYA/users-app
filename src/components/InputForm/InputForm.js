import { useState } from "react";

const InputForm = (props) => {
  const [user, setUser] = useState({
    name: "",
    age: 0,
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
    console.log(user);
    props.onNewUser(user);
  };

  return (
    <form onSubmit={newUserHandler}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={user.name}
          onChange={nameInputHandler}
        ></input>
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          value={user.age}
          onChange={ageInputHandler}
        ></input>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default InputForm;
