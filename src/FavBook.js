import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import FavBooks from "./FavBooks.css";
import React from "react";
// import axios from "axios";


class FavBook extends React.Component {
    render() {
        return (
            <div>
                

                <Card key ={this.props.key} style={{ width: '18rem' }}>
  <Card.Img  className="img-book"  src={this.props.img} variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
{this.props.description}
    </Card.Text>
    <Card.Text>
{this.props.status}
    </Card.Text>
  </Card.Body>
</Card>
           </div>
        );
    }
}

export default FavBook;