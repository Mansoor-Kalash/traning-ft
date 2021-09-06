import React  from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
class ModalUpdate extends React.Component {
    render() {
        return (
            <div>
                    <Form onSubmit={this.props.ubdataData}>
  <Row className="align-items-center">
    <Col sm={3} className="my-1">
      
      <Form.Control name="lat" id="inlineFormInputName" placeholder="lat" />
    </Col>
    <Col xs="auto" className="my-1">
      <Button type="submit">Submit</Button>
    </Col>
  </Row>
</Form>  
            </div>
        );
    }
}

export default ModalUpdate;