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
    </div>
  );
}

export default MyWorks;