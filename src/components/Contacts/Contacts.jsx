import ContactItem from 'components/ContactsItem/ContactsItem';
import List from '@mui/joy/List';

const Contacts = ({ options }) => {
  return (
    <>
      <List>
        {options.map(el => {
          return <ContactItem key={el.id} el={el} />;
        })}
      </List>
    </>
  );
};

export default Contacts;
