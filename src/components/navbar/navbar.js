import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData"

import "../App.css"
import { IconContext } from "react-icons";

function Navbar() {

    const [sidebar, setSideBar] = useState(false)
    const showSideBar = () => setSideBar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "undefined" }}>
                {sidebar ?
                    <nav className="nav-menu active">
                        <ul className="nav-menu-items">
                            <li className="navbar-toggle">
                                <Link to="#" className="menu-bars">
                                    <AiIcons.AiOutlineClose  onClick={showSideBar}/>
                                </Link>
                            </li>

                            {SideBarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}

                        </ul>
                    </nav> :
                    <nav className="nav-menu">
                        <ul className="nav-menu-items">
                            <li className="navbar-toggle inactive">
                                <Link to="#" className="menu-bars">
                                    <FaIcons.FaBars onClick={showSideBar} />
                                </Link>
                            </li>

                            {SideBarData.map((item, index) => {
                                return (
                                    <li key={index} className={sidebar ? item.cName : "nav-text inactive"}>
                                        <Link to={item.path}>
                                            {item.icon}
                                        </Link>
                                    </li>
                                )
                            })}

                        </ul>
                    </nav>
                }
            </IconContext.Provider>
        </>
    )
}

export default Navbar;