import React from "react";
import { Contacts } from "../../contacts";
import Avatar from "./Avatar";
import Detail from "./Detail";

function createdContact(contact) {
  return (
    <Card
      className={contact.className}
      name={contact.name}
      img={contact.img}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
function Card(props) {
  return (
    <div className={`card ${props.className}`}>
      <div className="top">
        <h3>{props.name}</h3>
        <Avatar img={props.img} />
      </div>
      <Detail tel={props.tel} email={props.email} />
    </div>
  );
}

function ReactProps() {
  return (
    <div>
      <h1 className="contact-title">My Contacts</h1>
      {Contacts.map(createdContact)}
    </div>
  );
}
export default ReactProps;
