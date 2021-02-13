import React from 'react';
import dashBoardContext from '../dashboardContext';
import PropTypes from 'prop-types';

class SideBarMeal extends React.Component {
    static contextType = dashBoardContext;

    render() {
       
        

        

        return (
            <div className='SideBarMeal'>
                <button className='back-button' onClick={() => this.props.history.goBack()}>
                    Back
                </button>
                <div className='location'>
                    <p>
                        Go back to days.
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