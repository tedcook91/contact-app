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
    this.sortContacts = this.sortContacts.bind(this)
    this.filterContacts = this.filterContacts.bind(this)
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

  sortContacts() {
     function compare(a,b) {
       const emailA = a.emailAddress.toUpperCase();
       const emailB = b.emailAddress.toUpperCase();
       let comparison = 0;
       if (emailA > emailB) {
         comparison = 1;
       } else if (emailA < emailB) {
         comparison = -1;
       }
       return comparison;
     }
     this.setState({contacts: this.state.contacts.sort(compare)});
   }


 filterContacts() {
   let allContacts = this.state.contacts.filter((contact) => {
     return contact.emailAddress.includes('.com')
   });
   this.setState({contacts: allContacts})
 }



  render() {
    let sortContacts = () => this.sortContacts()
    let filterContacts = () => this.filterContacts()
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
          <h2>Contact List</h2>
            <div className="controls">
              <input onClick={sortContacts} value="Sort" className="button" />
              <input onClick={filterContacts} value="Filter" className="button" />
            </div>
          <table>
            <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Company Name</th>
          </tr>
        </thead>
          <tbody>

          {contacts}

        </tbody>
      </table>
        <ContactForm addContact={addContact} />
      </div>
    )
  }
}

export default ContactsContainer
