import React  from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
class SearchForm extends React.Component {
    render() {
        return (
            <div>
                 
              <Form onSubmit={this.props.gitCityName}>
  <Row className="align-items-center">
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
        Name
      </Form.Label>
      <Form.Control name="cityname" id="inlineFormInputName" placeholder="Jane Doe" />
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

export default SearchForm;