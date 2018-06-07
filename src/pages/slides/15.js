import React from 'react';
import slide from '../../slide-hoc';

export default slide(() => (
    <section>
        <h1>Assignment: Styled Components</h1>
        <code><pre>
        {`
        const MyComponent = styled.div\`
            color: red;
            background: black;
        \`;
        `}
        </pre></code>
        <p>Style your card attractively (or unattractively!)</p>
        <p><a href="/assignments/05/">Assignment</a></p>
    </section>
));