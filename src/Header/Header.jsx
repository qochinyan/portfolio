import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = ({ setDarkTheme, darkTheme }) => {
  const handleCheck = (evt) => {
    if (evt.target.checked) {
      setDarkTheme(false);
    } else {
      setDarkTheme(true);
    }
  };
  return (
    <div className={darkTheme ? "headerBox" : "headerBox light"}>
      <div className="innerHeader">
        <label className="themeChanger">
          <input onClick={handleCheck} type="checkbox" />
          <span class="slider round"></span>
        </label>
        <div className={darkTheme ? "burger" : "light burger"}>
        <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="list">
          <ul>
            <li>
              <NavLink
                to="/portfolio"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "1px solid white" : "none",
                  borderColor: darkTheme ? "white" : "black",
                  textDecoration: "none",
                  color: darkTheme ? "white" : "rgb(36,36,36)",
                })}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "1px solid white" : "none",
                  textDecoration: "none",
                  borderColor: darkTheme ? "white" : "black",
                  color: darkTheme ? "white" : "rgb(36,36,36)",
                })}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "1px solid white" : "none",
                  textDecoration: "none",
                  borderColor: darkTheme ? "white" : "black",
                  color: darkTheme ? "white" : "rgb(36,36,36)",
                })}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
