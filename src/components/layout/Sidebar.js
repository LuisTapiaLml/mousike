import React from 'react'
import {  NavLink } from 'react-router-dom'
import deezerLogo from "../../img/deezer-logo.png";
import {  FaMusic , FaMicrophone ,FaLongArrowAltUp, FaList } from "react-icons/fa";


export const Sidebar = () => {
    return (
        <aside>
            <nav>

                <NavLink className="nav-link" to="/" > <FaLongArrowAltUp  className="icon" /> <span>Top Music</span> </NavLink>
                {/* <NavLink className="nav-link" to="/podcast" > <FaMicrophone className="icon"/> <span>Podcast</span> </NavLink>
                <NavLink className="nav-link" to="/genre" > <FaMusic className="icon"/> <span>Genre</span> </NavLink> */}
                <NavLink className="nav-link" to="/playlist" > <FaList className="icon"/> <span>Playlist</span> </NavLink>                <span className="line"></span>
            </nav>
            <footer>
                <span>
                    Powered by
                </span>
                <img src={deezerLogo} alt=""/>
            </footer>
        </aside>
    )
}
