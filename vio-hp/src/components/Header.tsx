import React from 'react'
import { Link } from '@reach/router'
import '../html/css/style.css'

const Header: React.FC = () => {
  return <div className="p-header__pc">
    <div className="p-header__pc__menu">
      <Link to="/profile" className="p-header__pc__menu__single">Profile</Link>
      <Link to="/lesson" className="p-header__pc__menu__single">Lesson</Link>
      <Link to="about" className="p-header__pc__menu__single">News</Link>
      <Link to="#" className="p-header__pc__menu__single">Contact</Link>
    </div>
  </div>
}
export default Header