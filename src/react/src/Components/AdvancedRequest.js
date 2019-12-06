import React, {Component} from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default class AdvancedRequest extends Component {

  handleCTA(event) {
    this.props.handleCTA(event)
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="my-2">
        <Modal show={this.props.open} onHide={this.props.handleToggleModal}>
        <form onSubmit={(event) => {this.handleCTA(event)}}>
          <Modal.Header className="d-flex">
                <Modal.Title>{this.props.title}</Modal.Title>
                <button className="no-btn-style" type="button" onClick={this.props.handleToggleModal}>
                    <span className="fas fa-times" title="Close" role="img"></span>
                </button>
          </Modal.Header>
          <Modal.Body>{this.props.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={this.props.handleToggleModal}>
              Close
            </Button>
            <input type="submit" value={this.props.CTA} id="cta" color="secondary" className="btn btn-secondary" onClick={(event) => {this.handleCTA(event)}}/>
          </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}
