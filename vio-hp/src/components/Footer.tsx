import React from "react";
import { Link } from "@reach/router";
import '../html/css/style.css'

const twitterImg = require('../html/img/twitter.png')
const instaImg = require('../html/img/insta.png')

const Footer: React.FC = () => {
  return (
    <footer className='p-footer_bg'>
      <div className='p-footer-pc u-flex u-flex_jc_sb u-flex_aa_center'>
        <div className='p-footer-pc-logo'>
          <div className='hp-logo p-footer-pc-logo__hp u-mb_lg u-ml_md'>HINAKO FUCHIINO</div>
          <div className='p-footer-pc-logo-sns u-flex u-flex_aa_center u-flex_jc_sa'>
            <div><img src={twitterImg} alt="" /></div>
            <div><img src={instaImg} alt="" /></div>
          </div>
        </div>
        <div className='p-footer-pc-menu p-footer-pc__menu'>
          <Link to='#' className='p-footer-pc-menu__single'>Profile</Link>
          <Link to='#' className='p-footer-pc-menu__single'>Lesson</Link>
          <Link to='#' className='p-footer-pc-menu__single'>News</Link>
          <Link to='#' className='p-footer-pc-menu__single'>Contact</Link>
        </div>
      </div>
      <div className="u-text_center u-mb_md"><span className="p-footer_copy">©️HinakoFuchino.co</span></div>
    </footer>
  )
}
export default Footer