import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
  const { pathname, hash, key } = useLocation();
  
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({behavior: "smooth", block: "center"});
        }
      }, 100);
    }
  }, [pathname, hash, key]);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
