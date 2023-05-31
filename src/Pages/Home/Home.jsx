import { useSelector, useDispatch } from 'react-redux';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'Redux/Contacts/contactsApi';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import FilterForm from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';
import { filter, getFilter } from 'Redux/Filter/filterSlice';
import { MainTitle, SecondTitle } from 'components/Container/Container.styled';

const Home = () => {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const contactsFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  const contacts = data ?? [];

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

    addContact(newContact);
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
    <>
      <MainTitle>Phonebook</MainTitle>
      <PhonebookForm addContact={addContacts} />
      <SecondTitle>Contacts</SecondTitle>
      <FilterForm label="Find contacts by name" onChange={handleFilterChange} />
      {contacts.length === 0 ? (
        <p>You don't have contacts yet</p>
      ) : (
        <Contacts options={filteredContacts} />
      )}
    </>
  );
};

export default Home;
