import React from 'react';
import { Link } from 'react-router-dom';
import dashBoardContext from '../dashboardContext';
import './SideBar.css';


class SideBar extends React.Component {
    static contextType = dashBoardContext;

    render() {
        const { days } = this.context;
        const dayList = days.map(day => {
            return (
                <div className='day' key={day.id}>
                    <Link
                        to={`/day/${day.id}`}>{day.day_title} </Link>
                </div>
            )
        })
        return (
            <div className='SideBar'>
                {dayList}
                <div className='add'>
                    <Link
                        to={'/addDay'}><h3>Add New Day</h3></Link>
                </div>
            </div>
        )
    }
}

export default SideBar;