import React from "react";
import ClassForm from "./ClassForm";
import ClassFormFilled from "./ClassFormFilled";

export default class App extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {
      className: "",
      classSurname: "",
      classEmail: "",
      classPassword: "",
      classConfirmPassword: "",
      emptyFull: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    let toggler = !this.state.emptyFull;
    this.setState({
      emptyFull: toggler
    });
  }

  render() {
    console.log(this.state.emptyFull);
    return (
      <div className="App">
        {/* {this.state.emptyFull ? (
          <ClassFormFilled
            name={this.state.className}
            surname={this.state.classSurname}
            email={this.state.classEmail}
            password={this.state.classPassword}
            confirmPassword={this.state.classConfirmPassword}
          />
        ) : (
          <ClassForm
            name={this.state.className}
            surname={this.state.classSurname}
            email={this.state.classEmail}
            password={this.state.classPassword}
            confirmPassword={this.state.classConfirmPassword}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )} */}

        <ClassForm 
          name={this.state.className}
          surname={this.state.classSurname}
          email={this.state.classEmail}
          password={this.state.classPassword}
          confirmPassword={this.state.classConfirmPassword}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
