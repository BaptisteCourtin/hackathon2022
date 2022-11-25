import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import logo from "../assets/logo4.png";
import "../styles/navbar.css";

const Navbar = ({ authentification, setAuthentification, darkMode, setDarkMode }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        setAuthentification(false)
        navigate('/')
    }

    return (
        <nav className="navbar">
            <div className="navbarContainer">
                <div className="title">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="navbarInner">
                    <div className="toggle-mode">
                        <input
                            type="checkbox"
                            id="toggle"
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        <label class="toggle" for="toggle">
                            <HiSun className="sun icon" />
                            <HiMoon className="moon icon" />
                            <span className="ball"></span>
                        </label>
                    </div>
                    <div className="buttons">
                        {authentification ? (
                            <>
                                <Link to='/Profile'>Profil</Link>
                                <button onClick={handleClick}>Déconnexion</button>
                            </>
                        ) : (
                            <Link to='/registration'>S'enregistrer</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
