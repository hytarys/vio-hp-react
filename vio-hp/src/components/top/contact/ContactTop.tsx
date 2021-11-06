import React from "react";
import '../../../html/css/style.css'
import { ContactForm } from "./ContactForm";
import ContactSP from "./ContactSP";

const ContactTop: React.FC = () => {
  document.addEventListener("scroll", function(){
    var animation = document.querySelector(".animation2")
    var target = animation.getBoundingClientRect().top + window.pageYOffset;
    var scrollY = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    var windowHeight = window.innerHeight;
    var screenHeight = window.parent.screen.height
    if (scrollY  > target - windowHeight + (screenHeight)/2 ) {
      animation.classList.add("active")
    }
  })
  return (
    <section
    className='p-contact-top'
    >
      <ContactSP />
      <div className='p-contact-top-wrap animation2'>
        <div className='p-contact-top-wrap__title u-mb_xxl'>
          <span className='p-contact-top-wrap__title_border-bottom u-pb_lg'>CONTACT</span>
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