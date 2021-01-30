import React, { createContext, useState, useEffect } from 'react';
import moment from "moment";

import './App.css';
import Timer from "./components/Timer.js";

export const AppContext = createContext();

function App() {
  const format = "hh:mm:ss";

  const inittialTimeValues = [
    moment().format(format),
    moment().add(1, "h").format(format),
    moment().add(2, "h").format(format)
  ] 

  const [flag, setFlag] = useState(true);
  const [time, setTime] = useState(inittialTimeValues);
  
  useEffect(() => {
    let timerId = setTimeout(function run() {
      if (flag) {
        setTime([
          moment().format(format),
          moment().add(1, "h").format(format),
          moment().add(2, "h").format(format)
        ]);

        timerId = setTimeout(run, 1000);
      } else {
        clearTimeout(timerId);
      }
    }, 1000);

    return () => clearTimeout(timerId);
  });

  function clickButton() {
    setFlag(!flag);
  };

  return (
    <AppContext.Provider value={
      {
        flag,
        time,
        clickButton,
      }
    }>
      <Timer></Timer>
    </AppContext.Provider>
  );
}

export default App;
