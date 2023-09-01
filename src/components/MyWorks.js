import React from 'react';
import { Link } from "react-router-dom";

function MyWorks() {
  return (
    <div className="my-work-container" id="my-work">
        <div className="work">
          <div className="work__image">
            <img src={window.location.origin + '/static/cyberland-background.jpeg'} alt="" />
          </div>
          <div className="work__link">
            <Link to="https://github.com/uzdenovabdullakh/Cyberland" target='blank'>Ссылка на репозиторий в GitHub</Link>
          </div>
        </div>
        <div className="work">
          <div className="work__image">
            <img src={window.location.origin + '/static/autoholding-background.jpeg'} alt="" />
          </div>
          <div className="work__link">
            <Link to="https://github.com/uzdenovabdullakh/AutoHolding" target='blank'>Ссылка на репозиторий в GitHub</Link>
          </div>
        </div>
        <div className="work">
          <div className="work__image">
            <img src={window.location.origin + '/static/verbsfinder-background.png'} alt="" />
          </div>
          <div className="work__link">
            <Link to="https://github.com/uzdenovabdullakh/VerbsFinder" target='blank'>Ссылка на репозиторий в GitHub</Link>
          </div>
        </div>
        <div className="work">
          <div className="work__image">
            <img src={window.location.origin + '/static/qwertyconverter-background.png'} alt="" />
          </div>
          <div className="work__link">
            <Link to="https://github.com/uzdenovabdullakh/QwertyConverter" target='blank'>Ссылка на репозиторий в GitHub</Link>
          </div>
        </div>
        <div className="work">
          <div className="work__image">
            <img src={window.location.origin + '/static/todo-site.png'} alt="" />
          </div>
          <div className="work__link">
            <Link to="https://github.com/uzdenovabdullakh/Todo-App" target='blank'>Ссылка на репозиторий в GitHub</Link>
          </div>
        </div>
       <div className="work">
          <div className="work__image">
            <img src={window.location.origin + '/static/tic-tac-toe.png'} alt="" />
          </div>
          <div className="work__link">
            <Link to="https://github.com/uzdenovabdullakh/Tic-Tac-Toe" target='blank'>Ссылка на репозиторий в GitHub</Link>
          </div>
      </div>
      <div className="work">
          <div className="work__image">
            <img src={window.location.origin + '/static/calculator.png'} alt="" />
          </div>
          <div className="work__link">
            <Link to="https://github.com/uzdenovabdullakh/Calculator-Javascript" target='blank'>Ссылка на репозиторий в GitHub</Link>
          </div>
      </div>
      <div className="work">
          <div className="work__image">
            <img src={window.location.origin + '/static/paswword-generator.png'} alt="" />
          </div>
          <div className="work__link">
            <Link to="https://github.com/uzdenovabdullakh/password-generator" target='blank'>Ссылка на репозиторий в GitHub</Link>
          </div>
      </div>
      <div className="work">
          <div className="work__image">
            <img src={window.location.origin + '/static/myportfolio.png'} alt="" />
          </div>
          <div className="work__link">
            <Link to="https://github.com/uzdenovabdullakh/MyPortfolioSite" target='blank'>Ссылка на репозиторий в GitHub</Link>
          </div>
      </div>
      <div className="work">
          <div className="work__image">
            <img src={window.location.origin + '/static/hacker-news.png'} alt="" />
          </div>
          <div className="work__link">
            <Link to="https://github.com/uzdenovabdullakh/Hacker-News" target='blank'>Ссылка на репозиторий в GitHub</Link>
          </div>
      </div>
    </div>
  );
}

export default MyWorks;
