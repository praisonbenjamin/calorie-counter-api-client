import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import SideBarDay from './SideBarDay/SideBarDay';
import SideBarMeal from './SideBarMeal/SideBarMeal';

import StoreDay from './StoreDay/StoreDay';
import StoreMeal from './StoreMeal/StoreMeal';
import dashboardContext from './dashboardContext';
import AddDay from './AddDay/AddDay';
import AddMeal from './AddMeal/AddMeal';
import PickADay from './PickADay/PickADay';
import landingPage from'./LandingPage/LandingPage';


import './Dashboard.css'

class Dashboard extends React.Component {

   
    state = {
        meals: [],
        days: []
    }

    getDayData() {
        fetch(`https://calm-citadel-38607.herokuapp.com/api/day`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Hey, something went wrong')
                }
                return response.json()
            })
            .then(data => {
                this.setState({
                    days: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    getMealData() {
        fetch(`https://calm-citadel-38607.herokuapp.com/api/meal`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Hey, something went wrong')
                }
                return response.json()
            })
            .then(data => {
                this.setState({
                    meals: data
                })
            })
            .catch(err => {
                alert(err);
            })
    }

    deleteItem = (mealId) => {
        const filterState = this.state.meals.filter(meal => {
            return meal.id !== mealId;
        })

        this.setState({
            meals: filterState
        })
    }

    addDay = (newDay) => {
        const addState = [...this.state.days, newDay];
        this.setState({ days: addState })
    }

    addMeal = (newMeal) => {
        const addMeal = [...this.state.meals, newMeal]
        this.setState({ meals: addMeal })
    }

    componentDidMount() {
        this.getDayData();
        this.getMealData();
    }


    
    render() {
        const contextValue = {
            meals: this.state.meals,
            days: this.state.days,
            deleteItem: this.deleteItem,
            addDay: this.addDay,
            addMeal: this.addMeal
        }
        return (
            <div className='Dashboard'>
                
                <dashboardContext.Provider
                    value={contextValue}>
                    <div className='flex-one'>
                        <Route exact path='/dashboard'
                            component={SideBar}
                        />
                        <Route path='/day/:dayId'
                            component={SideBarDay}
                        />
                        <Route path='/meal/:mealId'
                            component={SideBarMeal}
                        />
                    </div>
                    <div className='flex-three'>
                        <Switch>
                        <Route exact path='/'
                                component={landingPage}
                            />
                            <Route exact path='/dashboard'
                                component={PickADay}
                            />
                            <Route path='/day/:dayId'
                                component={StoreDay}
                            />
                            <Route path='/meal/:mealId'
                                component={StoreMeal}
                            />
                            <Route path='/addDay'
                                component={AddDay} />
                            <Route path='/addMeal'
                                component={AddMeal} />
                        </Switch>
                    </div>
                </dashboardContext.Provider>
                
                
            </div>
        )
    }
}

export default Dashboard;