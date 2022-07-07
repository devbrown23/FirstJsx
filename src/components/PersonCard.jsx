///IMPORT DEPENDECYS///
import React, { Component } from 'react';

///CREATE COMPONENTS////

class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{firstName},{lastName}</h1>
                <h2>Age:{age}</h2>
                <h2>Hair Color:{hairColor}</h2>
            </div>
        );
    }
}
///EXPORT THE COMPONENTS///
export default PersonCard;