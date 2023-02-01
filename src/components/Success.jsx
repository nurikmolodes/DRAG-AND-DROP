import React from "react";
import success from "../assets/success.svg";

const Success = () => {
  return (
    <div>
      <div className="success">
        <div className="top">
          <img src={success} alt="vector" />
        </div>
        <div className="bottom">
          <h2 style={{ color: "#5AB98F" }}>Файл успешно загружен</h2>
        </div>
      </div>
    </div>
  );
};

export default Success;
