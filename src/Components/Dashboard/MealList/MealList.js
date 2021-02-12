import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../dashboardContext';

class MealList extends React.Component {
  static contextType = AppContext;

  handleDelete = (mealId) => {
    const deleteUrl = `https://calm-citadel-38607.herokuapp.com/api/meal${mealId}`;

    fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          this.context.handleMealDelete(mealId);
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { meals } = this.context;
    console.log(this.context);
    const mealsArray = meals.map((meal) => {

      return (
        <li className="meal" key={meal.id}>
          <div>
            <h2>
              <Link to={`/meal/${meal.id}`}>{meal.meal}</Link>
            </h2>
          </div>
          <div>
            <p>Calories: {meal.calories}</p>
            <button onClick={() => this.handleDelete(meal.id)}>
              Delete Meal
            </button>
          </div>
        </li>
      );
    });

    return (
      <div className="list">
        <Link to="/add-meal">
          <button className="add-meal">Add Meal</button>
        </Link>

        <ul>{mealsArray}</ul>
      </div>
    );
  }
}

export default MealList;