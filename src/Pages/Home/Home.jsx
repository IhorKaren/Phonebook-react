import { useSelector, useDispatch } from 'react-redux';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyle from 'components/GlobalStyles/GlobalStyles';
import Box from '@mui/joy/Box';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'Redux/Contacts/contactsApi';
import Sidebar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import FilterForm from 'components/Filter/Filter';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Contacts from 'components/Contacts/Contacts';
import { filter, getFilter } from 'Redux/Filter/filterSlice';
import { MainTitle } from 'components/Container/Container.styled';
import theme from 'components/Theme/Theme';

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
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange theme={theme}>
      <GlobalStyle />
      <Box sx={{ display: 'flex', height: '100dvh' }}>
        <Sidebar />
        <Header />
        <Main>
          <MainTitle>Contacts</MainTitle>
          <Box
            sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end' }}
          >
            <PhonebookForm addContact={addContacts} />
            <FilterForm onChange={handleFilterChange} />
          </Box>

          {contacts.length === 0 ? (
            <p>You don't have contacts yet</p>
          ) : (
            <Contacts options={filteredContacts} />
          )}
        </Main>
      </Box>
    </CssVarsProvider>
  );
};

export default Home;
