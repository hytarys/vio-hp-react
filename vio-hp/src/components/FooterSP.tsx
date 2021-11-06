import React from "react";
import '../html/css/style.css';

const instaImg = require('../html/img/insta.png')

const FooterSP: React.FC = ()=>{
  return (
    <footer className="u-text_center p-footer_bg p-footer-sp">
      <div className="u-py_lg p-footer-sp__follow-box u-mx_xl">
        <span className="p-footer-sp__follow u-mb_sm">FOLLOW ME:</span><img className="u-pl_sm" src={instaImg} alt="" />
      </div>
      <div className="u-py_lg"><span className="p-footer_copy-sp">©️HinakoFuchino.co</span></div>
    </footer>
  )
}
export default FooterSP