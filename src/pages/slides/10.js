import React from 'react';
import slide from '../../slide-hoc';

export default slide(() => (
    <section>
        <h1>Assignment: JSX</h1>
        <code><pre>
            {`
            <div>
                <Link to={'/my/url'}>Go somewhere</Link>
            </div>`}
        </pre></code>
        <p>Implement a component that renders a picture
        from the cat API and your name</p>
        <p><a href="/assignments/01/">Assignment</a></p>
    </section>
));