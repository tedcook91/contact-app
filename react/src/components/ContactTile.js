import React from 'react';

const ContactTile = props => {

  return(
    <div>
      <ul>
        <li>{props.firstName}</li>
        <li>{props.lastName}</li>
        <li>{props.emailAddress}</li>
        <li>{props.phoneNumber}</li>
        <li>{props.companyName}</li>
      </ul>
    </div>
  )
}

export default ContactTile;
