import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/joy/Box';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'Redux/Contacts/contactsApi';
import { filter, getFilter } from 'Redux/Filter/filterSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//
import Sidebar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import FilterForm from 'components/Filter/Filter';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Contacts from 'components/Contacts/Contacts';
import { MainTitle } from 'components/Container/Container.styled';

const Home = () => {
  const { data = [] } = useGetContactsQuery();
  const [addContact, result] = useAddContactMutation();

  const contactsFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addContacts = (name, number) => {
    const checkName = data.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      return toast.error(`${name} is already in contacts.`);
    }

    const newContact = {
      name: name,
      number: number,
    };

    addContact(newContact);
  };

  const getFilteredContacts = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
    );
  };

  const handleFilterChange = e => {
    dispatch(filter(e.target.value));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <Box sx={{ display: 'flex', height: '100dvh' }}>
        <Sidebar />
        <Header />
        <Main>
          <MainTitle>Contacts</MainTitle>
          <Box
            sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end' }}
          >
            <PhonebookForm
              addContact={addContacts}
              isLoading={result.isLoading}
            />
            <FilterForm onChange={handleFilterChange} />
          </Box>

          {data.length === 0 ? (
            <p>You don't have contacts yet</p>
          ) : (
            <Contacts options={filteredContacts} />
          )}
        </Main>
      </Box>
      <ToastContainer theme="colored" />
    </>
  );
};

export default Home;
