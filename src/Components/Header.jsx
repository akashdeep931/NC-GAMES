import "./style/Header.css";

const Header = () => {
  return (
    <header id="main-header">
      <h1 id="main-title">NC GAMES</h1>
      <nav id="nav-menu">
        <ul id="menu-list">
          <li id="about" className="navigation">
            About
          </li>
          <li id="community" className="navigation">
            Community
          </li>
          <li id="my-account" className="navigation">
            My Account
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
