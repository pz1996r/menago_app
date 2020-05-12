/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Root extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    events: [],
  };

  componentDidMount() {
    fetch('/api/events')
      .then(res => res.json())
      .then(events => this.setState({ events }));
  }

  render() {
    const { events } = this.state;
    const eventsList = events.map(event => (
      <Event
        key={event.id}
        name={event.name}
        address={event.address}
        type={event.type}
        duration={event.duration}
        date={event.date}
        members={event.members}
      />
    ));
    return (
      <div>
        <h1>Events: </h1>
        {eventsList}
      </div>
    );
  }
}

export default Root;

const Event = props => {
  const { name, address, duration, type, date, members } = props;
  const style = {
    margin: '2em 0',
    border: '1px solid #777',
    padding: '2em',
  };
  return (
    <div style={style}>
      <h2>{name}</h2>
      <p>{address}</p>
      <p>Duration: {duration} hour(s)</p>
      <p>Date: {date}</p>
      <p>Type: {type}</p>
      <h3>Members:</h3>
      <ul>
        {members.map(member => (
          <li key={member}>{member}</li>
        ))}
      </ul>
    </div>
  );
};
