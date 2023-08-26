import React, { useEffect, useState } from "react";
import "./scss/style.scss";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyWorks from "./components/MyWorks";
import Contacts from "./components/Contacts";

function MainPage() {
  const [isRain, setIsRain] = useState(false);
  const [isSnow, setIsSnow] = useState(false);

  //анимация дождя не мое
  const rain = () => {
    function random(min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    }
    for (var i = 0; i < 200; i++) {
      document.getElementsByTagName("body")[0].innerHTML +=
        '<i class="rain" style="left: ' +
        random(-2000, 2000) +
        "px;transform: translate3d(0, 0, 0);animation-delay: " +
        0.01 * i +
        's"></i>';
    }
  };
  const snow = () => {
    for (var i = 0; i < 50; i++) {
      document.getElementsByTagName("body")[0].innerHTML +=
        '<div class="snowflake"></div>';
    }
  };

  useEffect(() => {
    const getWheather = async () => {
      const API_KEY = process.env.REACT_APP_API_KEY;
      try {
         const resp = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?id=484907&lang=ru&appid=${API_KEY}`
        );
        const data = await resp.json();
        if (data.weather[0].main === "Rain") {
          setIsRain(true);
        }
        if (data.weather[0].main === "Snow") {
          setIsSnow(true);
        }
      }
      catch(e){
        console.error(e)
      }
      //formattedData.weather[0]["description"]
    };
    getWheather();
    if (isRain) {
      rain();
    } else if (isSnow) {
      snow();
    }
  }, [isRain, isSnow]);

  return (
    <React.Fragment>
      <Header />
      <div className="wrapper">
        <AboutMe />
        <MyWorks />
        <Contacts />
      </div>
    </React.Fragment>
  );
}

export default MainPage;
