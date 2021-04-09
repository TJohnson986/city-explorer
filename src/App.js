import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.city);
  }

  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group controlId="city">
            <Form.Label>City Name</Form.Label>
            <Form.Control value={this.state.city} onInput={e => this.setState({ city: e.target.value })}></Form.Control>
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit">Explore!</Button>
      </>
    )
  }
}

export default App;
