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
          <button onClick={props.deleteContact}>Delete</button>
        </ul>
      </div>
    )
  }

  export default ContactTile;
