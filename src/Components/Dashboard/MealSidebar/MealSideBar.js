import React from 'react';
import AppContext from '../dashboardContext';
import PropTypes from "prop-types";

class MealSideBar extends React.Component {
  static contextType = AppContext;

  render() {
    const { days, meals } = this.context;

    const currentMealId = this.props.match.params.mealId;

    const currentMeal = meals.find((meal) => meal.id === currentMealId) || {
      dayId: '',
    };

    const currentDayId = currentMeal.dayId;
    const currentDay = days.find(
      (day) => day.id === currentDayId
    ) || { dayTitle: '' };
    return (
      <div className="meal-bar">
        <button onClick={() => this.props.history.goBack()}>Back</button>
        <h2>{currentDay.dayTitle}</h2>
      </div>
    );
  }
}
MealSideBar.prototypes={
  history: PropTypes.object.isRequired,
  match: PropTypes.object
}

export default MealSideBar;