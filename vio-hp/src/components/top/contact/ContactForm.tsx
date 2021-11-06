import React from "react";
import '../../../html/css/style.css';

export const ContactForm: React.FC = () => {
  return (
    <div className='p-contact-top-form u-mt_xxl p-contact-form u-pb_xl'>
      <form
      className='p-contact-top-form-main u-text_center u-pb_xl'
      action="#">
          <input className='p-contact-top-form-main__textbox p-contact-top-form-main__textbox_sm u-mb_xl'
          type="text" placeholder='お名前'
          />
          <input className='p-contact-top-form-main__textbox p-contact-top-form-main__textbox_sm u-mb_xl'
          type="text" placeholder='電話番号'
          />
          <textarea className='p-contact-top-form-main__textbox p-contact-top-form-main__textbox_lg u-mb_xl'
          placeholder='本文'
          />
          <input type="button" value="SEND" className="p-contact-top-form-main__button" />
      </form>
    </div>
  )
}