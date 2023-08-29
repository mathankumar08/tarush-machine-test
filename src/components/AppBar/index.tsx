import React, { useEffect, useState } from "react";
import "./styles.scss";
import MenuItems from "../MenuItems";

const AppBar: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleWindowSizeChange = () => {
        if (window.innerWidth <= 800) {
            setIsMobile(true);
        } else setIsMobile(false);
    };

    useEffect(() => {
        window.addEventListener("load", handleWindowSizeChange);
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);


    return (
        <div className="app-bar">
            <h1>C.agent</h1>
            <MenuItems isMobile={isMobile} />
        </div>
    );
};

export default AppBar;
