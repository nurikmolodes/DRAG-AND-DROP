import "./App.scss";
import example from "../src/assets/example.svg";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import fil from "../src/assets/file.svg";
import DropFile from "./components/DropFile";
import Alert from "./components/Alert";
import Success from "./components/Success";
import xml from "../src/assets/sample.xml";
import delet from "../src/assets/delete.svg";

function App() {
  const [file, setFile] = useState(null);
  console.log(file);

  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div className="wrapper">
      <div className="box">
        <div className="first">
          <h1>Импорт склада с Excel</h1>
        </div>
        <div className="second">
          <div className="left">
            <h1>Инструкция по импорту</h1>
            <p>Файл должен быть без заголовок во всех загрузках</p>
          </div>
          <div className="right">
            <a href={xml} download>
              <img src={example} alt="example" />
            </a>
          </div>
        </div>

        {file === null && <DropFile handleChange={handleChange} />}
        {file?.type !== "text/xml" && file !== null && <Alert />}
        {file?.type === "text/xml" && <Success />}

        {file !== null && file?.type === "text/xml" && (
          <div className="files">
            <img src={fil} alt="" />
            <h3>{file.name}</h3>
            <h3>{file.size} КВ</h3>
            <img
              onClick={() => setFile(null)}
              className="delet"
              src={delet}
              alt=""
            />
          </div>
        )}

        <div className="fourth">
          <FileUploader handleChange={handleChange}>
            <button className="import">Импорт</button>
          </FileUploader>
          <button style={{ cursor: "pointer" }} onClick={() => setFile(null)}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
