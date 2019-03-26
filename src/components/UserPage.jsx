import React, { Component } from 'react'; 
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { DebounceInput } from 'react-debounce-input';

const SEARCH_QUERY = gql`
  query search($query: String!) {
    viewer {
      login
      starredRepositories {
        totalCount
      }
    }
    search(query: $query, type: REPOSITORY, first: 50) {
        nodes {
            ... on Repository {
                databaseId
                name
                owner {
                    login
                }
                stargazers {
                    totalCount
                }
            }
        }
    }
  }
`;

class UserPage extends Component {
    state = {query: "gitwise"}

    handleChange = (event) => {
        this.setState({query: event.target.value});
    }

    render() {
        const {query} = this.state;

        return (
            <div>
                <DebounceInput minLength={3} debounceTimeout={300} onChange={this.handleChange} />
                <Query query={SEARCH_QUERY} variables={{ query }}>
                    {({ loading, error, data }) => {
                        if (loading) return 'Loading...';
                        if (error) return `Error! ${error.message}`;

                        return (
                            <div>{data.search.nodes.map(
                                ({databaseId, name,owner:{login}, stargazers:{totalCount}}) => <div key={databaseId}><h1>{name} - {login} - {totalCount}</h1></div>)}
                            </div>
                        );
                    }}
                </Query>
            </div>
        )
    }
}

export default UserPage;
