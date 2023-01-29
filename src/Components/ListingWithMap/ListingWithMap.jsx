import React, { Component } from "react";

// const data = [
//   {
//     id: 1,
//     name: "list One",
//   },
//   {
//     id: 2,
//     name: "list Two",
//   },
//   {
//     id: 3,
//     name: "list Three",
//   },
//   {
//     id: 4,
//     name: "list Four",
//   },
//   {
//     id: 5,
//     name: "list Five",
//   },
// ];

export default class ListingWithMap extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, name: "Najaf", phone: "12332", email: "najaf@gmail.com" },
        { id: 2, name: "Haider", phone: "1232332", email: "haider@gmail.com" },
        { id: 3, name: "Ali", phone: "1332", email: "ali@gmail.com" },
        {
          id: 4,
          name: "Shahroz",
          phone: "123454532",
          email: "shahroz@gmail.com",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>Listing with map</h2>
        <ol>
          {this.state.data?.map(({ id, name, phone, email }) => {
            return (
              <li key={id}>
                {name}....
                {phone}....
                {email}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
