import React from 'react'

const DishItems = ({ item }) => {
    return (
        <div className={`dish__card ${item.fade ? 'fade-in' : ''}`}>
            <img src={item.image} alt={item.title} className='dish__img' />
            <h3 className="dish__title">{item.title}</h3>
            <a href="#" className="dish__button">
                Read <i className="fa-solid fa-arrow-right dish__button-icon"></i>
            </a>
        </div>
    )
}

export default DishItems
