import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  render() {
    const allListGroups = this.props.movieData.map((info, index) => (
      <ListGroup.Item key={index}>{`${info.title}: ${info.overview}`}</ListGroup.Item>
    ))
    return (
      <ListGroup>
        {allListGroups}
      </ListGroup>
    );
  }
}

export default Movies