import React from 'react';
import SingleMovie from './SingleMovie.js';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  render() {
    const allListGroups = this.props.movieData.map((info, index) => (
      <SingleMovie key={index} title={info.title} overview={info.overview} />
    ))
    return (
      <ListGroup>
        {allListGroups}
      </ListGroup>
    );
  }
}

export default Movies;