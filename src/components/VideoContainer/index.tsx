import React from "react";
import "./styles.scss";

import mobileImage from "../../assets/mobile.svg";

const VideoContainer: React.FC = () => {
    return (
        <div className="video-container">
            <div className="section-left">
                <h1 className="heading">
                    Build your <br /> connection
                </h1>
                <h4 className="description">
                    Go live on a fast, reliable, and hassle-free hosting network
                    that scales with your business-with one click and go code!{" "}
                </h4>
                <div className="button-container">
                    <button className="watch">Watch Video</button>
                    <button className="learn-more">Learn More</button>
                </div>
            </div>
            <div className="section-right">
                <img src={mobileImage} alt="mobile-app" />
            </div>
        </div>
    );
};

export default VideoContainer;
