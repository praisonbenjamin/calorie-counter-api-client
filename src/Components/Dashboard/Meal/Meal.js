import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import dashboardContext from '../dashboardContext';
import './Meal.css';


class Meal extends React.Component {
    static contextType = dashboardContext;
    

    deleteButton = (e) => {
        e.stopPropagation();
        const { deleteItem } = this.context;
        fetch(`https://calm-citadel-38607.herokuapp.com/api/meal/${this.props.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('There was an error in deletion')
                }
                return response;
            })
            .then(() => {
                deleteItem(this.props.id);
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {

        return (
            <div className='Meal'>
                <Link to={`/meal/${this.props.id}`}>
                    <h2>{this.props.meal}</h2>
                </Link>
                <div className='meal-details'>
                    <p>
                        Calories: {this.props.calories}
                    </p>
                    <button onClick={this.deleteButton}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

Meal.propTypes = {
    id: PropTypes
        .number
        .isRequired,
    calories: PropTypes
        .number
        .isRequired,
    meal: PropTypes
        .string
        .isRequired
}

export default Meal;