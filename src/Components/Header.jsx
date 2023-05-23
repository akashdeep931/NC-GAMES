import { Link, useNavigate } from "react-router-dom";
import "./style/Header.css";
import { useState, useContext } from "react";
import { UserContext } from "./ReactContext/UserContext";
import { VotesContext } from "./ReactContext/VotesContext";

const Header = () => {
  const navigate = useNavigate();
  const { username, setUsername } = useContext(UserContext);
  const { setVotesOnReview } = useContext(VotesContext);
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => {
    if (username) {
      setIsClicked(!isClicked);
    } else {
      navigate("/account");
    }
  };

  const clickMyProfile = () => {
    navigate("/account");
  };

  const clickLogOut = () => {
    setUsername("");
    setVotesOnReview(() => {
      return [];
    });
    setIsClicked(false);
  };

  return (
    <header id="main-header">
      <Link id="to-reviews" to="/reviews">
        <h1 id="main-title">NC GAMES</h1>
      </Link>
      <nav id="nav-menu">
        <ul id="menu-list">
          <li id="about" className="navigation">
            About
          </li>
          <li id="community" className="navigation">
            Community
          </li>
          <li id="my-account" className="navigation" onClick={toggleMenu}>
            My Account
          </li>
        </ul>
      </nav>
      {isClicked && (
        <section id="my-acc-box">
          <ul>
            <li
              id="my-profile"
              className="account-menu"
              onClick={clickMyProfile}
            >
              My Profile
            </li>
            <li id="log-out" className="account-menu" onClick={clickLogOut}>
              Log Out
            </li>
          </ul>
        </section>
      )}
    </header>
  );
};

export default Header;
