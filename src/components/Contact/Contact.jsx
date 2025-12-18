import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <div className={css.info}>
        <p className={css.name}>
          <FaUser color="red" /> {contact.name}
        </p>
        <p className={css.number}>
          {" "}
          <FaPhone color="orange" /> {contact.number}
        </p>
      </div>

      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}
