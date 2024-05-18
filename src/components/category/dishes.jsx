import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from './data'
import DishItems from './dishItems'

const Dishes = () => {
    const [item, setItem] = useState({ name: "all" });
    const [dishes, setDishes] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        let newDishes = [];
        if (item.name === "all") {
            newDishes = projectsData;
        } else {
            newDishes = projectsData.filter((dish) => dish.category === item.name);
        }

        // Add fade-out animation
        setDishes((prevDishes) => prevDishes.map(dish => ({ ...dish, fade: false })));

        // Set a timeout to apply the fade-in class after the fade-out animation
        setTimeout(() => {
            setDishes(newDishes.map(dish => ({ ...dish, fade: true })));
        }, 300);
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    }

    return (
        <div>
            <div className='dish__filters'>
                {projectsNav.map((item, index) => (
                    <span
                        onClick={(e) => handleClick(e, index)}
                        className={`${active === index ? 'active-work' : ''} dish__item`}
                        key={index}
                    >
                        {item.name}
                    </span>
                ))}
            </div>

            <div className="dish__container container grid">
                {dishes.map((item) => (
                    <DishItems item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Dishes
