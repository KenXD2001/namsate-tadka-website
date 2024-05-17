import React from 'react';
import "./home.css";
// import Social from './social';
// import Data from './data';
import ScrollDown from './scrollDown';
import BannerSlider from './bannerSlider';


const Home = () => {
    return (
        <div>
            <section className="home__section section" id='home'>
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
        </div>
    )
}

export default Home;
