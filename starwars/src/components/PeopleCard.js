import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const PeopleCard = props => {
  return (
    <Card style={{ backgroundColor: 'lightGray', opacity: '0.8', height: 'auto', padding: '2.5%', margin: '2%', width: '20%' }} className='card' >
      <CardBody>
        <CardTitle style={{ fontWeight: 'bold' }}>{props.name}</CardTitle>
        <CardText style={{ fontSize: '14px' }}>Height: {props.height}cm</CardText>
        <CardText style={{ fontSize: '14px' }}>Hair Color:{props.hair}</CardText>
        <CardText style={{ fontSize: '14px' }}>Eye Color:{props.eyes}</CardText>
      </CardBody>
    </Card >
  )
}
export default PeopleCard;