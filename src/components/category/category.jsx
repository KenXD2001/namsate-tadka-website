import React from 'react'
import "./category.css"
import Dishes from './dishes'

const Category = () => {
    return (
        <section className="work section" id='portfolio'>
            <h2 className="section__title">Category</h2>
            <span className="section__subtitle">Most rated and recent dishes.</span>
            <Dishes />
        </section>
    )
}

export default Category
