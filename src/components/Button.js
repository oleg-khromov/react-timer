import React, { useContext }from "react";

import { AppContext } from "../App";

const Button = () => {
  const { flag, clickButton } = useContext(AppContext);

  return <button className={`btn btn-${flag}`} onClick={() => clickButton()}>{flag ? "Pause" : "Start"}</button>;
}

export default Button;