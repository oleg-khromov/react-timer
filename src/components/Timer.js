import React, { useContext } from "react";

import TimerItem from "./TimerItem.js";
import Button from "./Button.js";
import { AppContext } from "../App";

const Timer = () => {
  const { time } = useContext(AppContext);

  return (
    <div className="container">
      <div className="inner">
        {
          time.map((value, index) => (
            <TimerItem key={index} value={value} index={index}></TimerItem>
          ))
        }
      </div>
      <Button></Button>
    </div>
  );
}

export default Timer;