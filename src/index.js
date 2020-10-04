import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Ted Dev" },
      { id: 2, nom: "José Perin" },
      { id: 3, nom: "Patrick Bizarre" },
    ],
    newClient: "",
  };

  handleChange = (event) => {
    const inputValue = event.currentTarget.value;
    this.setState({ newClient: inputValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const nomNewClient = this.state.newClient;

    const client = { id: id, nom: nomNewClient };
    const clients = this.state.clients.slice();
    clients.push(client);
    this.setState({ clients: clients, newClient: "" });
  };

  handleDelete = (id) => {
    // Copie du tableau 'clients' original
    const newClientsArray = this.state.clients.slice();
    // findIndex Compare permet de rechercher dans le tableau 'NewClients' l'objet client correspondant ayant le même ID que celui envoyé à handleDelete
    const indexClient = newClientsArray.findIndex((client) => client.id === id);

    // La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau.On peut ainsi vider ou remplacer une partie d'un tableau.
    newClientsArray.splice(indexClient, 1);
    // On remplace le tableau original de 'clients' par le nouveau (celui sans le clients précédemment supprimé)
    this.setState({ clients: newClientsArray });
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
            <li key={cli.id}>
              {cli.id + " | Nom : " + cli.nom}{" "}
              <button onClick={() => this.handleDelete(cli.id)}>X</button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Ajouter un client"
            value={this.state.newClient}
            onChange={this.handleChange}
          />
          <button>Confirmer</button>
        </form>
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
