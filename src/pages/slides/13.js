import React from 'react';
import slide from '../../slide-hoc';

export default slide(() => (
    <section>
        <h1>Assignment: Lists in React</h1>
        <code><pre>
            {`
            [].map(it => (
                <Component {...it} />
            ))
            `}
        </pre></code>
        <p>Render a list of cards</p>
        <p><a href="/assignments/03/">Assignment</a></p>
    </section>
));
