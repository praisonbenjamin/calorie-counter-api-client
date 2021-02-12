import React from 'react';

const dashboardContext = React.createContext({
    meals: [],
    days: [],
    deleteItem: () => { },
    addDay: () => { },
    addMeal: () => { }
})

export default dashboardContext;