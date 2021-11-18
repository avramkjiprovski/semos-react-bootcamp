import React from 'react';

export class DomasnoClass extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            showTable: false
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

  render() {
    return (
      <div>
        <div>
            <input
                type="text"
                name="firstName"
                placeholder="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
            />
            <br/>
            <br/>
            <input
                type="text"
                name="lastName"
                placeholder="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
            />
            <br/>
            <br/>
            <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleInputChange}
            />
            <br/>
            <br/>
            <input
                type="password"
                name="password"
                placeholder="lastName"
                value={this.state.password}
                onChange={this.handleInputChange}
            />

            <button onClick={() => {this.setState({showTable: !this.state.showTable})}}>
                {this.state.showTable === true ? 'Hide Table' : 'Show table'}</button>

            
            <br/>
            <br/>
            {
                this.state.showTable === true &&
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.firstName}</td>
                                <td>{this.state.lastName}</td>
                                <td>{this.state.email}</td>
                                <td>{this.state.password}</td>
                            </tr>
                        </tbody>
                    </table>
                        
            }
        </div> 
      </div>
    );
  }
}