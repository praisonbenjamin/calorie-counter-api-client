import React from 'react';
import dashBoardContext from '../dashboardContext';
import PropTypes from 'prop-types';
import './SideBarMeal.css'

class SideBarMeal extends React.Component {
    static contextType = dashBoardContext;

    render() {  
              
        const { days, meals } = this.context
        
        const currentMealId = this.props.match.params.mealId;

        const currentMeal = meals.find(meal => meal.id === Number(currentMealId)) || {
            folderId: ''
        };

        const currentDayId = currentMeal.assigned_day

        const currentDay = days.find(day => day.id === currentDayId) || {
            day_title: ''
        };   

        

        return (
            
            <div className='SideBarMeal'>
                <button className='back-button' onClick={() => this.props.history.goBack()}>
                    Back
                </button>
                <div className='location'>
                    <p>
                        Selected day: {currentDay.day_title}
                    </p>
                </div>
            </div>
        )
    }
}

SideBarMeal.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
}

export default SideBarMeal;