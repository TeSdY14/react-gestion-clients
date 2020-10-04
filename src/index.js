import React from "react";
import ReactDOM from "react-dom";

const names = [
  "Laurence Sophronius",
  "Anaitis Itai",
  "Rahim Júlia",
  "Pascual Lou",
  "Nestani Anthelm",
  "Eris Lena",
  "Nnenne Gemini",
  "Vitus Pyong-Ho",
  "Rose Nat",
  "Wambui Cloelius",
];

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Ted Dev" },
      { id: 2, nom: "José Perin" },
      { id: 3, nom: "Patrick Bizarre" },
    ],
    compteur: 0,
  };

  handleClick = () => {
    const newClientsArray = this.state.clients.slice();
    newClientsArray.push({
      id: this.state.clients.length + 1,
      nom: names[Math.floor(Math.random() * names.length)],
    });

    this.setState({ clients: newClientsArray });
    this.setState({ compteur: this.state.compteur + 1 });

    console.log(this.state);
  };

  render() {
    const title = "Liste de nos clients";
    const element = <li>Un élément 'li' seul</li>;
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.handleClick}>
          Clique moi ! <span>(Compteur : {this.state.compteur})</span>
        </button>

        <ul>
          {element}
          {this.state.clients.map((cli) => (
            <li key={cli.id}>
              {cli.id + " | Nom : " + cli.nom} <button>X</button>
            </li>
          ))}
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un client" />
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
