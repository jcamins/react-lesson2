import React from 'react'
import PropTypes from 'prop-types'
import { navigateTo } from 'gatsby-link'
import { browserHistory } from 'react-router'

import './slides.css';

export default (Child) => class Template extends React.Component {
    next() {
        try {
            const next = Number(location.pathname.match(/([0-9]{2})/)[1]) + 1;
            const nextString = next >= 10 ? next.toString() : `0${next}`;
            navigateTo(`/slides/${nextString}`);
        } catch (e) {
            navigateTo('/slides/');
        }
    }

    previous() {
        try {
            const previous = Number(location.pathname.match(/([0-9]{2})/)[1]) - 1;
            const previousString = previous >= 10 ? previous.toString() : `0${previous}`;
            navigateTo(`/slides/${previousString}`);
        } catch (e) {
            navigateTo('/slides/');
        }
    }

    listener = (ev) => {
        switch (ev.keyCode) {
            case 37:
                this.previous();
                break;
            case 38:
                navigateTo('/');
                break;
            case 39:
                this.next();
                break;
        }
    }

    componentDidMount() {
        window.addEventListener('keyup', this.listener);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.listener);
    }

    render() {
        return (
            <div className="slide">
                <Child />
            </div>
        );
    }
}