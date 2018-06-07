import gql from 'graphql-tag';
import React from 'react';
import { graphql as reactGraphql } from 'react-apollo';

class Card extends React.PureComponent {
    render () {
        const { firstName, lastName, description } = this.props;
        return (
            <div style={{ border: '1px solid' }}>
                <div>{firstName}</div>
                <div>{description}</div>
            </div>
        );
    }
}

class QueryingGraphQL extends React.PureComponent {
    static defaultProps = {
        profiles: []
    }
    render () {
        return (
            <div>
                {this.props.profiles.map(it => <Card key={it.firstName} {...it} />)}
            </div>
        );
    }
}

/*const QUERY = gql`
`;

export default reactGraphql(QUERY, {
    props: ({ error, data }) => ({ error, ...data })
})(QueryingGraphQL);*/

export default () => <div />;