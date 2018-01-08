import React from 'react';

  const ContactTile = props => {


    return(
      <div className="contacts">
        <table>
          <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.emailAddress}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.companyName}</td>
            <input className="button" onClick={props.deleteContact} value="Delete"/>
          </tr>
        </table>
      </div>
    )
  }

  export default ContactTile;
