import { useState } from "react";
import "./App.css";
import { Body } from "./container/Body";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const switchTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <div className="theme-container">
        <label id="label-theme-text" htmlFor="input-theme"></label>
        <label className="switch">
          <input
            type="checkbox"
            id="input-theme"
            checked="checked"
            onClick={switchTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
      <Body />
    </div>
  );
}

export default App;
