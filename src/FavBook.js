import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import React from "react";
// import axios from "axios";

class FavBook extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <Card 
          
          style={{ width: "18rem", display: "inline-block" }}
        >
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.props.status}</Card.Text>
          </Card.Body>
          <br/>
          <Button
            onClick={()=>{this.props.deletebook(this.props._id)}}
            type="click"
            variant="secondary"
          >Delete</Button>
           <Button
            onClick={()=>{this.props.showModelUpdate(this.props._id)}}
            type="click"
            variant="secondary"
          >Update</Button>
          
        </Card>
        <br />
        <br />
      </div>
    );
  }
}

export default FavBook;
