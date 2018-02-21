import React from 'react';

  const ContactTile = props => {


    return(
      <div className="contacts">
        <ul>
            <li>{props.firstName}</li>
            <li>{props.lastName}</li>
            <li>{props.emailAddress}</li>
            <li>{props.phoneNumber}</li>
            <li>{props.companyName}</li>
            <input className="delete" onClick={props.deleteContact} value="Delete"/>
        </ul>
      </div>
    )
  }

  export default ContactTile;
