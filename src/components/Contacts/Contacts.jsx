import ContactItem from 'components/ContactsItem/ContactsItem';
import { ContactsWrapper } from './Contacts.styled';

const Contacts = ({ options }) => {
  return (
    <>
      <ContactsWrapper>
        {options.map(el => {
          return <ContactItem key={el.id} el={el} />;
        })}
      </ContactsWrapper>
    </>
  );
};

export default Contacts;
