import { useEffect, MouseEvent, useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'Redux/Contacts/contactsApi';
import { filter, getFilter } from 'Redux/Filter/filterSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Contact, NewContact } from 'components/App.types';
//
import Sidebar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import FilterForm from 'components/Filter/Filter';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import Contacts from 'components/Contacts/Contacts';

export enum Filter {
  dateLast = 'dateLast',
  dateFirst = 'dateFirst',
  byName = 'byName',
  byNameReverse = 'byNameReverse',
}

const Home = () => {
  const { data = [], refetch } = useGetContactsQuery();
  const [addContact, result] = useAddContactMutation();

  const [sortedData, setSortedData] = useState<Contact[]>([]);
  const [selectedSortBy, setSelectedSortBy] = useState<Filter>(Filter.dateLast);

  const contactsFilter: string = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    setSortedData([...data]);
    setSelectedSortBy(Filter.dateLast);
  }, [data]);

  const addContacts = (name: string, number: string) => {
    const checkName: boolean = data.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      return toast.error(`${name} is already in contacts.`);
    }

    const newContact: NewContact = {
      name,
      number,
    };

    addContact(newContact);
  };

  const getFilteredContacts = (): Contact[] => {
    return sortedData.filter(contact =>
      contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
    );
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(filter(e.target.value));
  };

  const handleSortByChange = (
    e: MouseEvent<HTMLSelectElement>,
    newValue: string
  ) => {
    let newData: Contact[];

    switch (newValue) {
      case Filter.dateFirst:
        setSelectedSortBy(Filter.dateFirst);
        newData = [...data].reverse();
        break;

      case Filter.byName:
        newData = [...data].sort((a, b) => a.name.localeCompare(b.name));
        setSelectedSortBy(Filter.byName);
        break;

      case Filter.byNameReverse:
        newData = [...data].sort((a, b) => b.name.localeCompare(a.name));
        setSelectedSortBy(Filter.byNameReverse);
        break;

      default:
        setSelectedSortBy(Filter.dateLast);
        newData = data;
        break;
    }

    setSortedData([...newData]);
  };

  const filteredContacts: Contact[] = getFilteredContacts();

  return (
    <>
      <Box sx={{ display: 'flex', height: '100dvh' }}>
        <Sidebar />
        <Header />
        <Main>
          <Typography component="h1" level="h1" sx={{ mb: '0' }}>
            Contacts
          </Typography>
          <Box
            sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end' }}
          >
            <PhonebookForm
              addContact={addContacts}
              isLoading={result.isLoading}
            />
            <FilterForm
              onFilterChange={handleFilterChange}
              selectedValue={selectedSortBy}
              selectChange={handleSortByChange}
            />
          </Box>

          {data.length === 0 ? (
            <p>You don't have contacts yet</p>
          ) : (
            <Contacts array={filteredContacts} />
          )}
        </Main>
      </Box>
      <ToastContainer theme="colored" />
    </>
  );
};

export default Home;
