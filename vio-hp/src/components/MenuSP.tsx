import React, {useState} from "react";
import { Link } from "@reach/router";
import '../html/css/style.css';

const MenuSP: React.FC =() => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return(
    <header className="p-header-hamburger">
      <div className="p-header-hamburger__button" onClick={()=>menuFunction()}>
        <div
        className={openMenu ? "p-header-open p-header-hamburger_position" : "p-header-close p-header-hamburger_position"}></div>
        <div
        className={openMenu ? "p-header-open p-header-hamburger_position" : "p-header-close p-header-hamburger_position"}></div>
        <div
        className={openMenu ? "p-header-open p-header-hamburger_position" : "p-header-close p-header-hamburger_position"}></div>
      </div>
      <div className={openMenu ? "p-header-block" : "p-header-none"}>
        <ul>
          <li>
            <Link to="/" className="p-header__pc__menu__single">Top</Link>
          </li>
          <li>
            <Link to="/profile" className="p-header__pc__menu__single">Profile</Link>
          </li>
          <li>
            <Link to="/lesson" className="p-header__pc__menu__single">Lesson</Link>
          </li>
          <li>
            <Link to="/contact" className="p-header__pc__menu__single">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
export default MenuSP