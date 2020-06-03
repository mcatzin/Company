import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './CardForm.css';
class CardForm extends React.Component {
  render() {
    return (
      <div className="py-2">
        <Card className="cardform-container">
          <Card.Header className="title">{this.props.title}</Card.Header>
          <Card.Body>
            <Card.Text className="text-center">{this.props.status}</Card.Text>
            <Button variant="primary">Go To Table</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default CardForm;
