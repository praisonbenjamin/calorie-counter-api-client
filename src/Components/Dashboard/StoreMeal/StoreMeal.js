import React from 'react';
import SingleMeal from '../SingleMeal/SingleMeal'
import dashboardContext from '../dashboardContext';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import PropTypes from 'prop-types'

class StoreMeal extends React.Component {
    static contextType = dashboardContext;

    handleDeleteMeal = () => {
        this.props.history.push('/')
    }

    render() {
        const { meals } = this.context;
        const targetMeal = meals.find(meal => {
            return meal.id === Number(this.props.match.params.mealId)
        }) || { id: '' }

        return (
            <div className='MealStore' >
                <SingleMeal
                    key={targetMeal.id}
                    id={targetMeal.id}
                    meal={targetMeal.meal}
                    food_item={targetMeal.food_item}
                    calories={targetMeal.calories}
                    assigned_day={targetMeal.assigned_day}
                    onDeleteMeal={this.handleDeleteMeal}
                />
                <ErrorBoundary>
                    <p>
                        {targetMeal.content}
                    </p>
                </ErrorBoundary>
            </div>
        )
    }
}

StoreMeal.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
}

export default StoreMeal;