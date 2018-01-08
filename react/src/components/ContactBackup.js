let contacts = this.state.contacts.map(contact =>
  <ContactTile
    id={contact.id}
    key={contact.id}
    firstName={contact.firstName}
    lastName={contact.lastName}
    emailAddress={contact.emailAddress}
    phoneNumber={contact.phoneNumber}
    companyName={contact.companyName}
  />
