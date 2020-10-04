import React, { Component } from "react";

class Client extends Component {
  render() {
    /* 
    const client = this.props.client;
    const onDelete = this.props.onDelete;
    */
    const { client, onDelete } = this.props;

    return (
      <li>
        {client.id + " | Nom : " + client.nom + " "}
        <button onClick={() => onDelete(client.id)}>X</button>
      </li>
    );
  }
}

export default Client;
