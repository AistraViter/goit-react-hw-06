import { useSelector } from "react-redux";
import { useState } from "react";
// import { useState, useEffect } from "react";
// import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import styles from "./App.module.css";

// const savedContacts = JSON.parse(localStorage.getItem("saved-contacts"));

// const contacts =
//   savedContacts !== null
//     ? savedContacts
//     : [ ];

function App() {
  const { container, phonebookTitle } = styles;
  const contacts = useSelector((state) => state.contacts.items);
  const [inputValue, setInputValue] = useState("");

  // const handleSubmit = (values, actions) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name: values.name,
  //     number: values.number,
  //   };
  //   setContacts((prevContacts) => [...prevContacts, newContact]);
  //   actions.resetForm();
  // };

  // useEffect(() => {
  //   window.localStorage.setItem("saved-contacts", JSON.stringify(newContacts));
  // }, [newContacts]);

  // const deleteContact = (id) => {
  //   setContacts((prevContacts) =>
  //     prevContacts.filter((contact) => contact.id !== id)
  //   );
  // };

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <div className={container}>
      <h1 className={phonebookTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
