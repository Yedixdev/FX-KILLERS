import React, { useState } from "react";

const MyForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const API_KEY = "bZcfKqa3c7EDn2VhsDKY1Q";
  const FORM_ID = "7439790"; // Tu Form ID
  const BASE_URL = "https://api.convertkit.com/v3/forms";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/${FORM_ID}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: API_KEY,
          email: email,
          first_name: name,
        }),
      });

      if (response.ok) {
        setMessage("¡Gracias por suscribirte!");
        setEmail("");
        setName("");
      } else {
        setMessage("Hubo un error. Inténtalo nuevamente.");
      }
    } catch (error) {
      setMessage("Hubo un problema al enviar tu suscripción.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Suscribirme</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default MyForm;
