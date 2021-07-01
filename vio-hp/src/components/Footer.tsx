import React from "react";
import { Link } from "@reach/router";
import '../html/css/style.css'

const Footer: React.FC = () => {
  return (
    <div className='p-footer-pc'>
      <div className='p-footer-pc-menu'>
        <Link to='#' className='p-footer-pc-menu__single'>Profile</Link>
        <Link to='#' className='p-footer-pc-menu__single'>Lesson</Link>
        <Link to='#' className='p-footer-pc-menu__single'>News</Link>
        <Link to='#' className='p-footer-pc-menu__single'>Contact</Link>
      </div>
    </div>
  )
}
export default Footer