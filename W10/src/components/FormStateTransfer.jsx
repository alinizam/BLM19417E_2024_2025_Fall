import { useState } from "react";

export default function FormStateTransfer() {
  const [name, setName] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");

  return (
    <div>
      <input
        name="firstName"
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        name="lastName"
        onChange={(event) => setLastname(event.target.value)}
      />
      <button
        onClick={() => {
          setName(firstName + " " + lastName);
        }}
      >
        Show name
      </button>
      <p>{name}</p>
    </div>
  );
}
