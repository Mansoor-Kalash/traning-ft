import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class FavBook extends React.Component {
    // onSubmit={()=>this.props.ubdataData(this.props.email,this.props.lat)}
    render() {
        return (
            <div>
                    <Card   style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{this.props.lat}</Card.Title>
    <Card.Text>
      {this.props.email}
    </Card.Text>
    <Button onClick={()=>this.props.dlelteItem(this.props.lat,this.props.email)} type="click" variant="primary">delete</Button>
    <Button onClick={()=>this.props.showMethodOfUpdate(this.props.lat,this.props.email)} type="click" variant="primary">delete</Button>

    {/* <Button type="submit" variant="primary">update</Button> */}

  </Card.Body>
</Card>
            </div>
        );
    }
}

export default FavBook;