import React, {useState} from "react";
import { Link } from "@reach/router";
import '../html/css/style.css';

const MenuSP: React.FC =() => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return(
    <header className={openMenu ? "p-header-hamburger-open u-position_absolute" : "p-header-hamburger-close u-position_absolute"}>
      <div className="p-header-hamburger__button" onClick={()=>menuFunction()}>
        <div
        className={openMenu ? "p-header-open p-header-hamburger_position" : "p-header-close p-header-hamburger_position"}></div>
        <div
        className={openMenu ? "p-header-open p-header-hamburger_position" : "p-header-close p-header-hamburger_position"}></div>
        <div
        className={openMenu ? "p-header-open p-header-hamburger_position" : "p-header-close p-header-hamburger_position"}></div>
      </div>
      <div className={openMenu ? "p-header-block" : "p-header-none"}>
        <ul className="u-pl_none">
          <li className="u-text_center p-header-sp-menu u-py_lg">
            <Link to="/" className="p-header__sp__menu__single">TOP</Link>
          </li>
          <li className="u-text_center p-header-sp-menu u-py_lg">
            <Link to="/profile" className="p-header__sp__menu__single">PROFILE</Link>
          </li>
          <li className="u-text_center p-header-sp-menu u-py_lg">
            <Link to="/lesson" className="p-header__sp__menu__single">LESSON</Link>
          </li>
          <li className="u-text_center p-header-sp-menu u-py_lg">
            <Link to="/contact" className="p-header__sp__menu__single">CONTACT</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
export default MenuSP