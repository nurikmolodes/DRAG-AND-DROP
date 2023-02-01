import React from "react";
import alert from "../assets/alert.svg";

const Alert = () => {
  return (
    <div>
      <div className="third" style={{ background: "#FAE5E3" }}>
        <div className="top">
          <img src={alert} alt="vector" />
        </div>
        <div className="bottom">
          <h2 style={{ color: "#CA3725" }}>
            Неподдерживаемый формат файла, только "xml"
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Alert;
