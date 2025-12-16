import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../../pages/Contacts/Contacts";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts.length) {
    return <p>No contacts</p>;
  }

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          {/* sadece Contact prop alır */}
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
