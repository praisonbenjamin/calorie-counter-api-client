import React from 'react'
import dashboardContext from '../dashboardContext';
import PropTypes from 'prop-types'



//form for adding meal
class AddMeal extends React.Component {
    static contextType = dashboardContext;

    constructor(props) {
        super(props)
        this.state = {
            meal: '',
            calories: '',
            foodItem: '',
            targetDayId: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const { addMeal } = this.context;
        

        fetch('https://calm-citadel-38607.herokuapp.com/api/meal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                meal: this.state.meal,
                calories: this.state.calories,
                assigned_day: this.state.targetDayId,
                food_item: this.state.foodItem,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('There was an error creating Meal. Please try again!')
                }
                return response.json()
            })
            .then(data => {
                addMeal(data);
                this.setState({
                    meal: '',
                    caloreis: '',
                    foodItem: '',
                    targetDayId: '',

                })
                this.props.history.goBack();
            })
            .catch(err => {
                alert(err);
            })
    }

    updateMeal(newMeal) {
        this.setState({
            meal: newMeal
        })
    }

    updateCalories(newCalories) {
        this.setState({
            calories: newCalories
        })
    }

    updateFoodItem(newFoodItem) {
        this.setState({
            foodItem: newFoodItem
        })
    }

    updateTargetDay(newTargetDay) {
        this.setState({
            targetDayId: newTargetDay
        })
    }

    render() {
        const { days } = this.context;

        const selectOptions = days.map((day, i) => {
            return (
                <option key={i} value={day.id}>{day.day_title}</option>
            )
        })

        return (
            <div className='AddMeal'>
                <form className='addMealForm' onSubmit={e => this.handleSubmit(e)}>
                    <fieldset>
                        <legend>Add New Meal</legend>

                        <label htmlFor='meal'>Meal:</label>
                        <br></br>
                        <select name='meal' id='meal'
                            onChange={e => this.updateMeal(e.target.value)}>
                            <option value='0'>Choose a meal</option>
                            <option value='Breakfast'>Breakfast</option>
                            <option value='Lunch'>Lunch</option>
                            <option value='Dinner'>Dinner</option>
                            <option value='Snack'>Snack</option>
                        </select>

                        <br></br>

                        <label htmlFor='calories'>Enter calories:</label>
                        <br></br>
                        <input type='number' id="calories" name="calories" rows="4" cols="50"
                            value={this.state.calories}
                            onChange={e => this.updateCalories(e.target.value)} />

                        <br></br>

                        <label htmlFor='foodItem'>Enter Food Item:</label>
                        <br></br>
                        <textarea id="foodItem" name="foodItem" rows="4" cols="20"
                            value={this.state.foodItem}
                            onChange={e => this.updateFoodItem(e.target.value)} />

                        <br></br>

                        <label htmlFor='targetDay'>Select Day</label>
                        <br></br>

                        <select name='targetDay' id='targetDay'
                            onChange={e => this.updateTargetDay(e.target.value)}>
                            <option value={''}>---</option>
                            {selectOptions}
                        </select>

                        <br></br>

                        <button type='submit'
                            disabled={
                                !(this.state.meal.length > 0) ||
                                !(this.state.calories.length > 0) ||
                                !(this.state.targetDayId.length > 0) ||
                                !(this.state.foodItem.length > 0)
                            }>
                            Create New Meal
                        </button>
                    </fieldset>
                </form>
                <button onClick={() => this.props.history.goBack()}>
                    Cancel
                </button>
            </div>
        )
    }
}

AddMeal.propTypes = {
    history: PropTypes
        .object,
    goBack: PropTypes
        .func
}

export default AddMeal;