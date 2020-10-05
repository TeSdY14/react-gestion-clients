import React, {useState} from "react";
import ReactDOM from "react-dom";

import Client from "./Client";
import ClientForm from "./ClientForm";

const App = () => {

  const title = "Liste de nos clients";
  const element = <li>Un élément 'li' seul</li>;

  const [clients, setClients] = useState([
      { id: 1, nom: "Ted Dev" },
      { id: 2, nom: "José Perin" },
      { id: 3, nom: "Patrick Bizarre" },
    ])

  const handleAddClient = (newClient) => {
    /* en dessous : [ ...xxx] : Spread operator équivalent à : this.state.clients.slice() */
    const addedClient = [...clients];
    addedClient.push(newClient);
    setClients(addedClient);
  };

  const handleDelete = (id) => {
    // Copie du tableau 'clients' original
    const updatedClients = [...clients];
    // findIndex Compare permet de rechercher dans le tableau 'NewClients' l'objet client correspondant ayant le même ID que celui envoyé à handleDelete
    const indexClient = updatedClients.findIndex((client) => client.id === id);
    // La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau.On peut ainsi vider ou remplacer une partie d'un tableau.
    updatedClients.splice(indexClient, 1);
    // On remplace le tableau original de 'clients' par le nouveau (celui sans le clients précédemment supprimé)
    setClients(updatedClients);
  };
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {element}
          {clients.map((cli) => (
            <Client key={cli.id} client={cli} onDelete={handleDelete} />
          ))}
        </ul>
        <ClientForm onAddClient={handleAddClient} />
      </div>
    );
  }

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
