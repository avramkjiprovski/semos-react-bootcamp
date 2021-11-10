import React from 'react';

export class User extends React.Component {
  render() {
    let { name, age, city } = this.props.person;
    console.log(this.props);

    return (
      <div>
        <h1>User</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>City: {city}</p>
      </div>
    );
  }
}