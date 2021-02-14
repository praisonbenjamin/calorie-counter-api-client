import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dashboardContext from '../dashboardContext';

class SingleMeal extends React.Component {
    static contextType = dashboardContext;
    static defaultProps = {
        onDeleteMeal: () => { }
    }

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
                this.props.onDeleteMeal()
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
                <div className='meal_details'>
                    <h3>{this.props.food_item}</h3>
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

SingleMeal.propTypes = {
    meal: PropTypes.string,
    food_type: PropTypes.string,
    calories: PropTypes.number,
    onDeleteNote: PropTypes.func
}

export default SingleMeal;