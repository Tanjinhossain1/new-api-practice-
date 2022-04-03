import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex p-4 justify-around bg-blue-600 text-white items-center'>
            <div>
                <h1 className='text-3xl'>Meal_&_Sports</h1>
            </div>
            <div>
                <NavLink className={({isActive})=> isActive ? 'text-orange-600 font-bold mr-12' : 'mr-12'} to='/'>Home</NavLink>
                <NavLink className={({isActive})=> isActive ? 'text-orange-600 font-bold mr-12' : 'mr-12'} to='/mealDb'>MealDb</NavLink>
                <NavLink className={({isActive})=> isActive ? 'text-orange-600 font-bold mr-12' : 'mr-12'} to='/sports'>Sports</NavLink>
            </div>
        </div>
    );
};

export default Header;