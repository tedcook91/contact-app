import React from 'react';

  const ContactTile = props => {

    return(

      <tr>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.emailAddress}</td>
        <td>{props.phoneNumber}</td>
        <td>{props.companyName}</td>
        <td className="delete" onClick={props.deleteContact}>Delete</td>
      </tr>
    )
  }

export default ContactTile;
