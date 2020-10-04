import React from "react";
import ReactDOM from "react-dom";

import Client from "./Client";
import ClientForm from "./ClientForm";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Ted Dev" },
      { id: 2, nom: "José Perin" },
      { id: 3, nom: "Patrick Bizarre" },
    ],
  };

  handleAddClient = (client) => {
    /* en dessous : [ ...xxx] : Spread operator équivalent à : this.state.clients.slice() */
    const clients = [...this.state.clients];
    clients.push(client);
    this.setState({ clients });
  };

  handleDelete = (id) => {
    // Copie du tableau 'clients' original
    const clients = [...this.state.clients];
    // findIndex Compare permet de rechercher dans le tableau 'NewClients' l'objet client correspondant ayant le même ID que celui envoyé à handleDelete
    const indexClient = clients.findIndex((client) => client.id === id);
    // La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau.On peut ainsi vider ou remplacer une partie d'un tableau.
    clients.splice(indexClient, 1);
    // On remplace le tableau original de 'clients' par le nouveau (celui sans le clients précédemment supprimé)
    this.setState({ clients });
  };

  render() {
    const title = "Liste de nos clients";
    const element = <li>Un élément 'li' seul</li>;
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {element}
          {this.state.clients.map((cli) => (
            <Client key={cli.id} client={cli} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onAddClient={this.handleAddClient} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
