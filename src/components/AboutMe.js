import React from 'react';

function AboutMe() {
  return (
    <div className="about-me-container" id="about-me">
        <div className="about-me-container__photo">
          <img src={window.location.origin + '/static/my-photo.jpg'} alt=""></img>
        </div>
        <div className="about-me-container__text">
          <p>
            Студент специальности информационные системы и технологии в институте компьютерных технологий и информационной безопасности ЮФУ. 
          </p>
          <p>
            За период обучения работал в качестве frontend-разработчика (html,css,js,reactjs) на двух учебных проектах ("Анализ блокчейн-транзакций", "Система привлечения подрядчиков"), в рамках обучения спроектировал и выполнил курсовой проект "Система учета студентов" (C++, .NET, WindowsForm), участвовал в командной разработке на SfeduNet, спроектировал и выполнил несколько pet-проектов. 
          </p>
          <p>
            Прошел ДОП "Разработка смарт-контрактов" при поддержке ЮФУ и Иннополис, в рамках которого также выполнил курсовой проект (reactjs,solidity,firebase,ganache).
          </p>
        </div>
    </div>
  );
}

export default AboutMe;