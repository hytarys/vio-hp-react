import React,{useEffect, useState} from 'react'
import { Link } from '@reach/router'
import { useFixed } from '../hooks/useFixed'
import '../html/css/style.css'

const Header: React.FC = () => {

  const [isNav, setIsNav] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const menuFunction = () => {
    if(openMenu) {
      scrollY =  useFixed(false);
      document.body.classList.remove("fixed");
      window.scrollTo(0, scrollY * -1)
    }else{
      useFixed(true);
      document.body.classList.add("fixed");
    }
    setOpenMenu(!openMenu)
  }

  const scrollAmount = ():number => {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  }
  const onScroll = () => {
    const position = scrollAmount()
    const bodyClass = document.body.className;
    if(position >= 200 || bodyClass == "fixed")
    {
      setIsNav(false);
    }else {
      setIsNav(true);
    }
  }

  useEffect(()=>{
    document.addEventListener('scroll', onScroll)
    const nav = document.getElementById("pcNav");
    const hamburger = document.getElementById("pcHam");
    if (isNav) {
      nav.style.display = "block"
      hamburger.style.display = "none"
    }else {
      nav.style.display = "none"
      hamburger.style.display = "block"
    }
  },[isNav])


  return (
  <>
    <nav
    id ="pcHam"
    className={openMenu ? "p-header-hamburger-open-pc" : "p-header-hamburger-close-pc"}>
      <div className="p-header-hamburger__button" onClick={()=>menuFunction()}>
        <div
        className={openMenu ? "p-header-open p-header-hamburger_position" : "p-header-close p-header-hamburger_position"}></div>
        <div
        className={openMenu ? "p-header-open p-header-hamburger_position" : "p-header-close p-header-hamburger_position"}></div>
        <div
        className={openMenu ? "p-header-open p-header-hamburger_position" : "p-header-close p-header-hamburger_position"}></div>
      </div>
      <div className={openMenu ? "p-header-block-pc" : "p-header-none"}>
        <ul className="u-pl_none u-flex u-flex_jc_center u-flex_aa_center u-flex_column">
          <li className="u-text_center p-header-pc-menu u-py_lg">
            <Link to="/" className="p-header__pc__menu__single_ham">TOP</Link>
          </li>
          <li className="u-text_center p-header-pc-menu u-py_lg">
            <Link to="/profile" className="p-header__pc__menu__single_ham">PROFILE</Link>
          </li>
          <li className="u-text_center p-header-pc-menu u-py_lg">
            <Link to="/lesson" className="p-header__pc__menu__single_ham">LESSON</Link>
          </li>
          <li className="u-text_center p-header-pc-menu u-py_lg">
            <Link to="/contact" className="p-header__pc__menu__single_ham">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="p-header__pc">
      <nav className="p-header__pc__menu" id="pcNav">
        <Link to="/" className="p-header__pc__menu__single">Top</Link>
        <Link to="/profile" className="p-header__pc__menu__single">Profile</Link>
        <Link to="/lesson" className="p-header__pc__menu__single">Lesson</Link>
        <Link to="/contact" className="p-header__pc__menu__single">Contact</Link>
      </nav>
    </div>
  </>
  )
}
export default Header