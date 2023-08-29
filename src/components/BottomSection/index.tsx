import React from "react";
import "./styles.scss";


import cIcon from "../../assets/copy.svg";
import app1 from "../../assets/app-1.svg"
import app2 from "../../assets/app-2.svg"

const BottomSection: React.FC = () => {
  return (
    <div className="bottom-section">
      <div className="containers">
        <div className="container-1">
          <h1>
            Brain- <br /> storming
          </h1>
          <p className="poly">Polygonal wireframe composition</p>
          <p className="vector">Vector illustration</p>
        </div>
        <div className="container-2">
          <div className="quality">
            <h1>100%</h1>
            <p>Quality</p>
          </div>

          <div className="completed">
            <h1>99%</h1>
            <p>Completed</p>
          </div>
          <div className="programming">
            <h1>1.5M</h1>
            <p>Programming</p>
          </div>
        </div>
        <div className="container-3">
          <h1 className="number">01</h1>
          <h1 className="user">
            User Interface <br /> Elements
          </h1>
          <p>
            Vector EPS 10 elements <br />
            for creating user interface <br />
            of mobile applications
          </p>
        </div>
      </div>
        <img className="cicon" src={cIcon} alt="" />
        <img className="app1" src={app1} alt="" />
        <img className="app2" src={app2} alt="" />

    </div>
  );
};

export default BottomSection;
