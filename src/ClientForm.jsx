import React, {useState} from "react";

const ClientForm = ({ onAddClient} ) => {
  const [newClient, setAddClient] = useState("")

  const handleChange = (event) => {
    setAddClient( event.currentTarget.value )
  };

  const handleSubmit = (event) => {
    /* Empêcher le refresh page */
    event.preventDefault();
    /* Identifiant unique */
    const id = new Date().getTime();
    const nom = newClient;

    onAddClient({ id, nom });
    /* Vider le champ input */
    setAddClient("")
  };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter un client"
          value={newClient}
          onChange={handleChange}
        />
        <button>Confirmer</button>
      </form>
    );
  }

export default ClientForm;
