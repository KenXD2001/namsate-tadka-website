import React, { useState } from 'react';
import "./header.css";
import NTLogo from "../../assets/NamsteTadkaLogo.webp";

const Header = () => {
    /*=============== Chnage Background Header ===============*/
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");
        // when the scroll is higher than 200 viewport height, add the show-header class to a tag with the header tag
        if (this.scrollY >= 100) header.classList.add
            ("scroll-header");
        else header.classList.remove("scroll-header");
    });
    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='#home' className='nav__logo'>
                    <img src={NTLogo} alt="Logo" />
                </a>

                <div className="nav__searchbar_div">
                    <input className='nav__searchbar' type="text" placeholder='Search...' />
                </div>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a
                                href='#home'
                                onClick={() => setActiveNav("#home")}
                                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className='uil uil-estate nav__icon'></i> Home
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#skill' onClick={() => setActiveNav("#skill")} className={activeNav === "#skill" ? "nav__link active-link" : "nav__link"}>
                                <i className='uil uil-file-alt nav__icon'></i> Categories
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#services' onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                <i className='uil uil-briefcase-alt nav__icon'></i> Recipes
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className='uil uil-user nav__icon'></i> About Us
                            </a>
                        </li>

                        <button className='coffee-button'><i class="icon-coffee fa-solid fa-mug-hot"></i>By me a Coffee</button>
                    </ul>

                    <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;
