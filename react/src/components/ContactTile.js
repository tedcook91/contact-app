import React from 'react';

  const ContactTile = props => {


    return(

      <div className="contacts">
        <tbody>
          <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.emailAddress}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.companyName}</td>
            <td><input className="delete" onClick={props.deleteContact} value="Delete"/></td>
          </tr>
        </tbody>
      </div>
    )
  }

  export default ContactTile;
