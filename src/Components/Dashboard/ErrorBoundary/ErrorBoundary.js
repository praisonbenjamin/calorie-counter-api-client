import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props)
        this.state={
            hasError: false
        }
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>Opps, something went wrong. Please try again!</h2>
            );
        }
        return this.props.children;
    }  
}

ErrorBoundary.propType = {
    children: PropTypes
        .isRequired
}

export default ErrorBoundary;