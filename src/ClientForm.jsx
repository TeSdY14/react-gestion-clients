import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    newClient: "",
  };

  handleChange = (event) => {
    this.setState({ newClient: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    /* Empêcher le refresh page */
    event.preventDefault();
    /* Identifiant unique */
    const id = new Date().getTime();
    const nom = this.state.newClient;

    this.props.onAddClient({ id, nom });
    /* Vider le champ input */
    this.setState({ newClient: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter un client"
          value={this.state.newClient}
          onChange={this.handleChange}
        />
        <button>Confirmer</button>
      </form>
    );
  }
}

export default ClientForm;
