import React, { Component } from 'react'
import TextInputField from "../components/TextInputField";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:"",
      lastName:"",
      emailAddress:"",
      phoneNumber:"",
      companyName:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value })
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      firstName:"",
      lastName:"",
      emailAddress:"",
      phoneNumber:"",
      companyName:""
    })
  };


  handleSubmit(event) {
    event.preventDefault();
    const formPayload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
      phoneNumber: this.state.phoneNumber,
      companyName: this.state.companyName
    }
    this.props.addContact(formPayload)
    this.handleClearForm(event);
  }

  render() {
    return(
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <TextInputField
              content={this.state.firstName}
              label="First Name"
              name="firstName"
              handleChange={this.handleChange}
            />
            <TextInputField
              content={this.state.lastName}
              label="Last Name"
              name="lastName"
              handleChange={this.handleChange}
            />
            <TextInputField
              content={this.state.emailAddress}
              label="Email Address"
              name="emailAddress"
              handleChange={this.handleChange}
            />
            <TextInputField
              content={this.state.phoneNumber}
              label="Phone Number"
              name="phoneNumber"
              handleChange={this.handleChange}
            />
            <TextInputField
              content={this.state.companyName}
              label="Company Name"
              name="companyName"
              handleChange={this.handleChange}
            />
            <div>
              <input className="button" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm;
