import { useContext, useState } from "react";
import { UserContext } from "./ReactContext/UserContext";
import "./style/User.css";
import Profile from "./Profile";

const User = () => {
  const { username, setUsername } = useContext(UserContext);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(name);
  };

  if (username) {
    return <Profile />;
  }

  return (
    <section id="user">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:&nbsp;&nbsp;</label>
        <input
          id="username"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <br />
        <br />
        <button type="submit">Log in</button>
      </form>
    </section>
  );
};

export default User;
