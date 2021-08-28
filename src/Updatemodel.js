import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class Updatemodel extends React.Component {
  render() {
    return (
      <div>
      
          <Modal.Dialog>
            <Modal.Header
              type="click"
              onClick={this.props.showModelUpdate}
              closeButton
            >
              <Modal.Title>Update data of book</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={this.props.updateBook}>
                <Form.Control
                  size="lg"
                  type="text"
                  name="title"
                  placeholder="Book Title"
                />
                <br />
                <Form.Control
                  size="lg"
                  type="text"
                  name="description"
                  placeholder="Description"
                />
                <br />
                <Form.Control
                  size="lg"
                  type="text"
                  name="status"
                  placeholder="Status"
                />
                <br />
                <br />
                <Button variant="primary" type="submit">
                  Save changes
                </Button>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button
                onClick={this.props.showModelUpdate}
                type="click"
                variant="secondary"
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
      
      </div>
    );
  }
}

export default Updatemodel;
