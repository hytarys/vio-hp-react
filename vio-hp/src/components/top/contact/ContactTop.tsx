import React from "react";
import '../../../html/css/style.css'
import { ContactForm } from "./ContactForm";

const ContactTop: React.FC = () => {
  return (
    <section
    className='p-contact-top'
    >
      <div className='p-contact-top-wrap'>
        <div className='p-contact-top-wrap__title u-mb_xxl'>
          <span className='p-contact-top-wrap__title_border-bottom u-padding_bottom_lg'>CONTACT</span>
        </div>
        <div className='u-text_center'>
          <span>お問い合わせは下記フォームにてお願いいたします。</span>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactTop