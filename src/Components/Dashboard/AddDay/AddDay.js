import React from 'react'
import dashboardContext from '../dashboardContext';
import PropTypes from 'prop-types'

class AddDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            daytitle: ''
        }
    }

    static contextType = dashboardContext;

    handleSubmit = e => {
        e.preventDefault();

        const created = new Date().toISOString();

        const { addDay } = this.context;

        fetch('https://calm-citadel-38607.herokuapp.com/api/day', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                day_title: this.state.daytitle,
                date_created: created
             }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('There was an error creating this day. Please try again!')
                }
                return response.json();
            })
            .then(data => {
                addDay(data);
                this.setState({ daytitle: '' })
                this.props.history.goBack();
            })
            .catch(err => {
                alert(err);
            })
    }

    updateDayTitle(newDayTitle) {
        this.setState({ daytitle: newDayTitle })
    }

    render() {
        return (
            <div className='AddDay'>
                <form className='newDayForm' onSubmit={e => this.handleSubmit(e)}>
                    <fieldset>
                        <legend>New Day!</legend>
                        <label htmlFor='dayTitle'>Enter your day title here:</label>
                        <br></br>
                        <input type='text' name='dayTitle' id='dayTitle'
                            value={this.state.daytitle}
                            onChange={e => this.updateDayTitle(e.target.value)} />
                        <br></br>
                        <button type='submit'
                            disabled={!(this.state.daytitle.length > 0)}>
                            Create New Day
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

AddDay.propTypes = {
    history: PropTypes.object,
}

export default AddDay;