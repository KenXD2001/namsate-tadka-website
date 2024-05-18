import React from 'react';
import "./home.css";
// import Social from './social';
// import Data from './data';
import ScrollDown from './scrollDown';
import BannerSlider from './bannerSlider';
import Logo from "../../assets/NamsteTadkaLogo.webp"


const Home = () => {
    return (
        <section className="home__section section" id='home'>
            <div className='center__logo-div'>
                <img className='center__logo' src={Logo} alt="" />
            </div>
            <BannerSlider />
            <div className="home__container container grid">
                <div className="home__content grid">
                    {/* <Social /> */}

                    {/* <div className='home__img'></div> */}

                    {/* <Data /> */}
                </div>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home;
