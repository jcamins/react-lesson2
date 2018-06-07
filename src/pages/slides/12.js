import React from 'react';
import slide from '../../slide-hoc';

export default slide(() => (
    <section>
        <h1>Assignment: React props</h1>
        <code><pre>
            {`
            <div>
                <Link to={'/my/url'}>Go somewhere</Link>
            </div>`}
        </pre></code>
        <p>Implement a component that renders your name
        and description based on props</p>
        <p><a href="/assignments/02/">Assignment</a></p>
    </section>
));