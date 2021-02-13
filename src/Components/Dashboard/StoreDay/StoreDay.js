import React from 'react';
import { Link } from 'react-router-dom'
import Meal from '../Meal/Meal'
import dashboardContext from '../dashboardContext';
import PropTypes from 'prop-types';

class StoreDays extends React.Component {
    static contextType = dashboardContext;

    render() {
        const { meals } = this.context;
        const filteredNotes = meals.filter(meal => {
            return meal.assigned_day === Number(this.props.match.params.dayId);
        })
        const mealsMap = filteredNotes.map(meal => {
            return <Meal
                key={meal.id}
                id={meal.id}
                meal={meal.meal}
                calories={meal.calories}
                dayId={meal.assigned_day}
                food_item={meal.food_item}
            />
        });

        return (
            <div className='MealStorage' >
                {mealsMap}
                <Link
                    to={'/addMeal'}>
                    <button>
                        Add New Meal
                    </button>
                </Link>
            </div>
        )
    }
}

StoreDays.propTypes = {
    match: PropTypes.object
}

export default StoreDays;