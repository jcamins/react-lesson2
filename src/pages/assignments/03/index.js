import React from 'react';

class Card extends React.PureComponent {
    render () {
        const { firstName, lastName, description } = this.props;
        return (
            <div style={{ border: '1px solid' }}>
                <div>{firstName} {lastName}</div>
                <div>{description}</div>
            </div>
        );
    }
}

export default class ListOfStuff extends React.PureComponent {
    render () {
        const data = [
            { firstName: 'Lizzy', lastName: 'Smith', description: 'A very energetic kitten' },
            { firstName: 'Darcy', lastName: 'Potter', description: 'A middle-aged gray and white cat' },
            { firstName: 'Jasper', lastName: 'Johnson', description: 'A very, very old and entirely personality-free gray and white cat' },
            { firstName: 'Myshkin', lastName: 'James', description: 'A very personable Siberian' },
        ];
        /*
        * TODO: render a list of cards based on the data variable.
        */
    }
}

