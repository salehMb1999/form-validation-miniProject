import React from "react";
import "./Form.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameData: "",
      lastNameData: "",
      emailData: "",

      submitted: false,

      allValid: false,
    };
    this.firstNameHandler = this.firstNameHandler.bind(this);
    this.lastNameHandler = this.lastNameHandler.bind(this);
    this.emailDataHandler = this.emailDataHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
    if (
      this.state.firstNameData &&
      this.state.lastNameData &&
      this.state.emailData
    ) {
      this.setState({
        allValid: true,
      });
      setTimeout(() => {
        this.setState({
          allValid: false,
        });
      }, 3000);
    }
  }
  firstNameHandler(event) {
    console.log(event.nativeEvent.target.value);
    this.setState({
      firstNameData: event.nativeEvent.target.value,
    });
  }
  lastNameHandler(event) {
    this.setState({
      lastNameData: event.nativeEvent.target.value,
    });
  }
  emailDataHandler(event) {
    this.setState({
      emailData: event.nativeEvent.target.value,
    });
  }

  render() {
    return (
      <div className="form-container">
        <form
          onSubmit={this.submitHandler}
          className="register-form"
          autoComplete="off"
        >
          {this.state.allValid && (
            <div className="success-message">
              Success! Thank you for registering
            </div>
          )}
          <input
            onChange={this.firstNameHandler}
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />

          {this.state.submitted && !this.state.firstNameData && (
            <span id="first-name-error">Please enter a first name</span>
          )}
          {/* <span id="first-name-error">Please enter a first name</span> */}
          <input
            onChange={this.lastNameHandler}
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          {this.state.submitted && !this.state.lastNameData && (
            <span id="last-name-error">Please enter a last name</span>
          )}
          <input
            onChange={this.emailDataHandler}
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          {this.state.submitted && !this.state.emailData && (
            <span id="email-error">Please enter an email address</span>
          )}

          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
