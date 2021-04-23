import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  constructor(props){
    super(props)
      this.state = {};
  }

  render() {
    const allWeatherListGroups = this.props.weatherData.map((day, index) => (
      <ListGroup.Item key={index}>{`${day.date}: ${day.description}`}</ListGroup.Item>
    ))
    return (
      <ListGroup>
        {allWeatherListGroups}
      </ListGroup>
    );
  }
}

export default Weather