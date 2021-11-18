import React from 'react';
import PropTypes from 'prop-types';


export default class ClassForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        this.props.handleSubmit();
    }

    handleChange(e) {
        this.props.handleChange(e);
    }

  render() {
      
    console.log(this.props);

    return (
        <div className="ClassForm">
            <form onSubmit={this.props.handleSubmit}>
                <label>First Name:</label>
                <input 
                    type="text" 
                    name="name"
                    placeholder="First Name"
                    value={this.props.name}
                    onChange={this.props.handleChange}
                />

                <label>Last Name:</label>
                <input 
                    type="text" 
                    name="surname"
                    placeholder="Last Name"
                    value={this.props.surname}
                    onChange={this.props.handleChange} 
                />

                <label>Email:</label>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email"
                    value={this.props.email}
                    onChange={this.props.handleChange}
                />

                <label>Password:</label>
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    value={this.props.password}
                    onChange={this.props.handleChange}
                />
                
                <label>Confirm Password:</label>
                <input 
                    type="password" 
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={this.props.confirmPassword}
                    onChange={e=> this.props.handleChange(e)}
                />

                <button
                    type="submit"
                >Submit</button>
            </form>
        </div>
    )
  }
}


ClassForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired
}