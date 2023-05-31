import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import FilterForm from './Filter/Filter';
import Contacts from './Contacts/Contacts';
import { filter, getFilter } from '../Redux/Filter/filterSlice';
import { getContacts } from '../Redux/Contacts/contactsSlice';
import { fetchContacts, addContact } from '../Redux/Operations/operations';
import {
  Container,
  MainTitle,
  SecondTitle,
} from './Container/Container.styled';

export function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContacts = (name, number) => {
    const checkName = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = {
      name: name,
      number: number,
    };

    dispatch(addContact(newContact));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
    );
  };

  const handleFilterChange = e => {
    dispatch(filter(e.target.value));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <PhonebookForm addContact={addContacts} />
      <SecondTitle>Contacts</SecondTitle>
      <FilterForm label="Find contacts by name" onChange={handleFilterChange} />
      {contacts.length === 0 ? (
        <p>You don't have contacts yet</p>
      ) : (
        <Contacts options={filteredContacts} />
      )}
    </Container>
  );
}
