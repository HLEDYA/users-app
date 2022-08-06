import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm/InputForm";
import UserList from "./components/UserList/UserList";
import { useState } from "react";

const DummyUserList = [
  { name: "Ahmet", age: 12, id: 1 },
  { name: "Ayse", age: 11, id: 2 },
];

function App() {
  const [userList, setUserList] = useState(DummyUserList);

  const newUserHandler = (user) => {
    // extend user object with an id
    user = { ...user, id: Math.random().toString() };
    console.log(user);

    setUserList((prevUserList) => {
      return [...prevUserList, user];
    });
  };

  return (
    <div className="App">
      <InputForm onNewUser={newUserHandler} />
      <UserList items={userList} />
    </div>
  );
}

export default App;
