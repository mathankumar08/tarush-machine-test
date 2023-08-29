import React, { useState } from "react";
import "./styles.scss";
import hamburgerIcon from "../../assets/hamburger_icon.svg";

type Tprops = {
    isMobile: boolean;
};
const MenuItems: React.FC<Tprops> = ({ isMobile }) => {
    const menuItems = ["Home", "About", "Overview", "FAQs", "Blog", "Contact"];
    const [selectedMenuIndex, setMenuIndex] = useState<number>(0);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <>
            {isMobile ? (
                <>
                    <img
                        src={hamburgerIcon}
                        alt="mobile-app"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                    <ul
                        className={
                            isMenuOpen
                                ? "mobile-menu-items active"
                                : "mobile-menu-items"
                        }>
                        {menuItems.map((menu: string, index: number) => (
                            <li
                                key={menu}
                                className={
                                    selectedMenuIndex === index
                                        ? "selected"
                                        : ""
                                }
                                onClick={() => setMenuIndex(index)}>
                                {menu}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <ul className="menu-items">
                    {menuItems.map((menu: string, index: number) => (
                        <li
                            key={menu}
                            className={
                                selectedMenuIndex === index ? "selected" : ""
                            }
                            onClick={() => setMenuIndex(index)}>
                            {menu}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default MenuItems;
