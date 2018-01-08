import React, { Component } from 'react';
import ContactTile from '../components/ContactTile';
import ContactForm from '../components/ContactForm';


class ContactsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    }
    this.fetchContacts = this.fetchContacts.bind(this)
    this.addContact = this.addContact.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
  }

  componentDidMount() {
    this.fetchContacts()
  }

  fetchContacts() {
    fetch(`/api/v1/contacts`, {
    }).then(res => res.json())
    .then(data => {
      this.setState({
        contacts: data
      })
    })
  }

  addContact(formPayload) {
    fetch(`/api/v1/contacts`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formPayload)
    }).then(() => {
      this.fetchContacts()
    })
  }

  deleteContact(id) {
    fetch(`/api/v1/contacts/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      this.fetchContacts()
    })
  }


  render() {

    let deleteContact = (id) => this.deleteContact(id)
    let addContact = (formPayload) => this.addContact(formPayload)
    let contacts = this.state.contacts.map(contact =>
      <ContactTile
        id={contact.id}
        key={contact.id}
        firstName={contact.firstName}
        lastName={contact.lastName}
        emailAddress={contact.emailAddress}
        phoneNumber={contact.phoneNumber}
        companyName={contact.companyName}
        deleteContact={() => this.deleteContact(contact.id)}
      />
    )

    return(
      <div>
        <div>
          <h2>Contact List</h2>
          <table className="contactHeader">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Company Name</th>
            <tbody>
              {contacts}
            </tbody>
          </table>
        </div>
        <div>
          <ContactForm addContact={addContact} />
        </div>
      </div>
    )
  }
}

export default ContactsContainer
