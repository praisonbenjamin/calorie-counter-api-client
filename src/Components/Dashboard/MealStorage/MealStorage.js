import React from 'react';
import Meal from '../Meal/Meal';
import dashboardContext from '../dashboardContext';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class MealStorage extends React.Component {
    static contextType = dashboardContext;

    render() {
        const { meals } = this.context;
        const mealsMap = meals.map(meal => {
            return (
                <Meal
                    key={meal.id}
                    id={meal.id}
                    meal={meal.meal}
                    calories={meal.calories}
                    dayId={meal.assigned_day}
                    food_item={meal.food_item}
                    singleMeal={meal}
                />
            )
        });

        return (
            <div className='MealStorage' >
                <ErrorBoundary>
                    {mealsMap}
                </ErrorBoundary>
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

export default MealStorage;