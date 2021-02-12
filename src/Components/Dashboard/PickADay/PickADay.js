import React from 'react';
import { Link } from 'react-router-dom';

class PickADay extends React.Component {
    render () {
        return (
            <div className='PickADay'>
                <p>Choose a day to view details or add a meal by clicking 'Add Meal' below.</p>
                <Link to="/addMeal">
                    <button className="add-meal">Add Meal</button>
                </Link>
            </div>
        )
    }
}

export default PickADay;