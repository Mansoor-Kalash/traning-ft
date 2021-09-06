import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class RenderData extends React.Component {
    render() {
        return (
            <div>
                <Card onClick={()=>this.props.addDtataToMyFav(this.props.lat)} style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{this.props.lat}</Card.Title>
    <Card.Text>
      {this.props.lat}
    </Card.Text>
    <Button type="click" variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </div> 
        );
    }
}

export default RenderData;