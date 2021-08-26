import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React from "react";
// import axios from "axios";

class FavBook extends React.Component {
  render() {
    return (
      <div>
          <br />
        <br />
        <Card key={this.props.key} style={{ width: '18rem' , display: 'inline-block' }}>
         
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.props.status}</Card.Text>
          </Card.Body>
        </Card>
        <br />
        <br />
      </div>
    );
  }
}

export default FavBook;
