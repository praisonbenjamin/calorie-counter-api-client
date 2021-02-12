import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import dashboardContext from '../dashboardContext'



class SideBarDay extends React.Component {
    static contextType = dashboardContext;

    render() {
        const { days } = this.context;
        const daysMap = days.map(day => {
            return (
                <div className='day' key={day.id}>
                    <NavLink
                        activeClassName='selected'
                        to={`/day/${day.id}`}>{day.day_title} </NavLink>
                </div>
            )
        })
        return (
            <div className='SideBar'>
                {daysMap}
                <div className='add'>
                    <Link
                        to={'/addDay'}><h3>Add New Day</h3></Link>
                </div>
            </div>
        )
    }
}

export default SideBarDay;