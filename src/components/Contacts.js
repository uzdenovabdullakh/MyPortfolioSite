import React from 'react';
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className="contacts-container" id="contacts">
       <div className="contact">
          <Link className='contact__link' to="https://github.com/uzdenovabdullakh?tab=repositories" target='blank'>Мой GitHub</Link>
       </div>
       <div className="contact">
         <Link className='contact__link' to={window.location.origin+ '/static/Узденов Абдуллах Хасанович.pdf'} target='blank'>Мое резюме</Link>
       </div>
       <div className="contact">
          <Link className='contact__link' to="https://vk.com/uabdullakh" target='blank'>ВК</Link>
       </div>
       <div className="contact">
          <Link className='contact__link' to="mailto:uzdenovabdullah@yandex.ru" target='blank'>Электронная почта: <span>uzdenovabdullah@yandex.ru</span></Link>
       </div>
    </div>
  );
}

export default Contacts;
