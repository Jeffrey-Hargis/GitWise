import React, { Component } from 'react'; 
import { Link, withRouter } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from 'react-bootstrap/Media'
import logo from './images/gitwisecat.png'
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



class NewSearch extends Component {
    state = {query: "gitwise"}

    handleChange = (event) => {
        this.setState({query: event.target.value});
    }


    render() {
        const {query} = this.state;


        return (
            <div>
            <Container className="border mx-auto" style={{height:"700px"}}>
                <Row className="">
                    <Col className="bg-light border-right text-center" sm={4} md={2} style={{height:"700px", color:"gray"}}>
                    <Col xs={3} md={4}>
                    <img
                        alt=""
                        src={logo}
                        width="100"
                        height="100"
                        className="rounded-circle ml-4 mt-3"
                    />
                    </Col>
                        <Link to="/" alt="userhome">NAME</Link> <br />
                        <Link to="GitHub URL">GITHUB LINK</Link> <br />
                        <Link to="/favorites">FAVES</Link> <br />
                        <Link eventKey="disabled" disabled>SEARCH</Link>
                    </Col>
                    <Col className="mt-5" sm={8} md={10}>
                        <h1 className="text-center">SEARCH</h1> 
                        <DebounceInput minLength={3} debounceTimeout={300} onChange={this.handleChange} />
                        <Query query={SEARCH_QUERY} variables={{ query }}>
                        {({ loading, error, data }) => {
                            if (loading) return 'Loading...';
                            if (error) return `Error!`;

                            return (
                                <div>{data.search.nodes.map(
                                    ({databaseId, name,owner:{login, url}, stargazers:{totalCount}}) => <div key={databaseId}><h1>{name} - {login} - {totalCount} - {url}</h1></div>)}
                                </div>
                            );
                        }}
                        </Query> 
                        <hr />
                        <Col className="mx-auto" style={{height:"500px", width:"700px",overflowY:"scroll"}}>
                        <ul className="list-unstyled">
                            <Media as="li" className="border-bottom mb-2">
                                <img
                                width={64}
                                height={64}
                                className="mr-3 roundedCircle"
                                src={logo}
                                alt=""
                                />
                                <Media.Body>
                                       <Row>
                                            <Col><h6>NAME OF REPO</h6></Col>
                                            <Col><h6>USER</h6></Col>
                                            <Col><h6>SCORE</h6></Col>
                                            <Col className="text-right"><IsFavorite /></Col>
                                        </Row>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>

                            <Media as="li" className="border-bottom mb-2">
                                <img
                                width={64}
                                height={64}
                                className="mr-3 roundedCircle"
                                src={logo}
                                alt=""
                                />
                                <Media.Body>
                                       <Row>
                                            <Col><h6>NAME OF REPO</h6></Col>
                                            <Col><h6>USER</h6></Col>
                                            <Col><h6>SCORE</h6></Col>
                                            <Col className="text-right"><IsFavorite /></Col>
                                        </Row>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>

                            <Media as="li" className="border-bottom mb-2">
                                <img
                                width={64}
                                height={64}
                                className="mr-3 roundedCircle"
                                src={logo}
                                alt=""
                                />
                                <Media.Body>
                                       <Row>
                                            <Col><h6>NAME OF REPO</h6></Col>
                                            <Col><h6>USER</h6></Col>
                                            <Col><h6>SCORE</h6></Col>
                                            <Col className="text-right"><IsFavorite /></Col>
                                        </Row>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>

                            
                            <Media as="li" className="border-bottom mb-2">
                                <img
                                width={64}
                                height={64}
                                className="mr-3 roundedCircle"
                                src={logo}
                                alt=""
                                />
                                <Media.Body>
                                       <Row>
                                            <Col><h6>NAME OF REPO</h6></Col>
                                            <Col><h6>USER</h6></Col>
                                            <Col><h6>SCORE</h6></Col>
                                            <Col className="text-right"><IsFavorite /></Col>
                                        </Row>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>
                            </ul>
                            
                        </Col>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

let IsFavorite = (props) => {
    return (
        <div>
        {props ? <i className="fas fa-star fa-2x" style={{color:"#d9c158"}} onClick={() => props.toggle()}></i> : <i className="far fa-star fa-2x" style={{color:"#d9c158"}} onClick={() => props.toggle()}></i> } 
        </div>
    )
}

export default NewSearch;

                    