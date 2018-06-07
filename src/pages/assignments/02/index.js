import React from 'react';

class Assignment2 extends React.PureComponent {
    render () {
        /*
        * TODO: Implement a component that renders the name
        * and alma mater passed in as props
        */
    }
}

export default class UsingProps extends React.PureComponent {
    render () {
        return (
            <Assignment2
                firstName="Your"
                lastName="Name"
                description="Something about you"
            />
        );
    }
}
