import React from "react";
import '../../html/css/style.css'
import { ContactForm } from "components/top/contact/ContactForm";

const Contact:React.FC = () => {
  return (
    <div className="u-pt_xl p-contact-sp_px">
        <div className='u-text_center'>
          <span>お問い合わせは下記フォームにてお願いいたします。</span>
        </div>
      <ContactForm />
    </div>
  )
}

export default Contact