// src/components/ContactForm/ContactForm.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !number.trim()) return;
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  }

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        className={css.input}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={css.input}
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className={css.button}>Add contact</button>
    </form>
  );
}
