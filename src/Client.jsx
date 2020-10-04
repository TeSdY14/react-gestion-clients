import React from "react";

const Client = ({ client, onDelete }) => (
  <li>
    {client.id + " | Nom : " + client.nom + " "}
    <button onClick={() => onDelete(client.id)}>X</button>
  </li>
);

export default Client;
