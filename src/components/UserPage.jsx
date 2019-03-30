import React, { Component } from 'react'; 
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { DebounceInput } from 'react-debounce-input';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import logo from '../images/gitwisecat.png';

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
                    id
                    url
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
            <Container className="border mx-auto">
                <Row className="border">
                    <Col className="border-right text-center" sm={4} md={2}>
                    <Col xs={3} md={4}>
                    <img
                        alt=""
                        src={logo}
                        width="75"
                        height="75"
                        className="rounded-circle ml-4 mt-3"
                    />
                    </Col>
                        Name <br />
                        GitHub URL <br />
                        <Link to="/favorites">Favorites</Link>
                    </Col>
                    <Col className="text-center mt-5" sm={8} md={10}>
                        <h1>SEARCH</h1>
                        <div className="w-75 mx-auto">
                        <div>
                <DebounceInput minLength={3} debounceTimeout={300} onChange={this.handleChange} />
                
                <Query query={SEARCH_QUERY} variables={{ query }}>
                    {({ loading, error, data }) => {
                        if (loading) return 'Loading...';
                        if (error) return `Error! ${error.message}`;

                        return (
                            <div>{data.search.nodes.map(
                                ({databaseId, name,owner:{login, url}, stargazers:{totalCount}}) => <div key={databaseId}><h1>{name} - {login} - {totalCount} - {url}</h1></div>)}
                            </div>
                        );
                    }}
                </Query>
            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default UserPage;
