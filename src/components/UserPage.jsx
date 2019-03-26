import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom'; 
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_USER = gql`
  {
    viewer {
      login
    }
  }
`;

class UserPage extends Component {
    render() {
        return (
            <div>
                <Query query={GET_USER}>
                    {({ loading, error, data }) => {
                        if (loading) return 'Loading...';
                        if (error) return `Error! ${error.message}`;

                        return (
                            <div>{JSON.stringify(data)}</div>
                        );
                    }}
                </Query>
            </div>
        )
    }
}

export default UserPage;
