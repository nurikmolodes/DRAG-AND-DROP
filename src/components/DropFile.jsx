import React from "react";
import { FileUploader } from "react-drag-drop-files";
import vector from "../assets/vector.svg";

const DropFile = ({ handleChange }) => {

  return (
    <div>
      <FileUploader handleChange={handleChange} >
        <div className="third" style={{ cursor: 'pointer' }}>
          <div className="top">
            <img src={vector} alt="vector" />
          </div>
          <div className="bottom">
            <h2>Для начала загрузки отпустите файл</h2>
          </div>
        </div>
      </FileUploader>
    </div>
  );
};

export default DropFile;
