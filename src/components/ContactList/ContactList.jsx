import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/filtersSlice";
import styles from "./ContactList.module.css";





const ContactList = () => {
  const { ContactListContainer } = styles;
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={ContactListContainer}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

