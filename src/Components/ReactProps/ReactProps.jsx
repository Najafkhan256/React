import React from "react";

function Card(props) {
  //   console.log(props);
  return (
    <div className={`card ${props.className}`}>
      <h3>{props.name}</h3>
      <img src={props.img} alt={props.name} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

function ReactProps() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Card
        className="first-card"
        name="Najaf Khan"
        img="/images/najafkhan.png"
        tel="+123 456 789"
        email="example@gmail.com"
      />
      <Card
        className="second-card"
        name="Annus Khan"
        img="/images/najafkhan.png"
        tel="+123 456 789"
        email="example@gmail.com"
      />
      <Card
        className="third-card"
        name="Rayyan Khan"
        img="/images/najafkhan.png"
        tel="+123 456 789"
        email="example@gmail.com"
      />
    </div>
  );
}
export default ReactProps;
