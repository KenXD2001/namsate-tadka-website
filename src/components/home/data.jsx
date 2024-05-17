// data.jsx

import slide1 from '../../assets/banners/slider1.jpg';
import slide2 from '../../assets/banners/slider2.jpg';
import slide3 from '../../assets/banners/slider3.jpg';
import slide4 from '../../assets/banners/slider4.jpg';
import slide5 from '../../assets/banners/slider5.jpg';

const imageData = {
    slide1,
    slide2,
    slide3,
    slide4,
    slide5
};

const slidesData = [
    {
        id: 1, imgKey: 'slide1',
        heading: 'Quick and Easy Breakfast Recipes for Busy Mornings'
    },
    {
        id: 2, imgKey: 'slide2',
        heading: 'Healthy and Satisfying Lunch Recipes for Balanced Meals'
    },
    {
        id: 3, imgKey: 'slide3',
        heading: 'Hearty Dinners the Whole Family Will Love'
    },
    {

        id: 4, imgKey: 'slide4',
        heading: 'Indulgent Chocolate Desserts You Cant Resist Making'
    },
    {
        id: 5, imgKey: 'slide5',
        heading: 'Festive Recipes for Every Holiday Celebration and Gathering'
    }
];

export { imageData, slidesData };
