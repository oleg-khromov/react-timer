import React from "react";

const TimerItem = ({ value, index }) => {
  return (
    <div className="box">
      <span className="title">TimeZone {index}</span>
      <div className="value">{value}</div>
    </div>
  );
}

export default TimerItem;