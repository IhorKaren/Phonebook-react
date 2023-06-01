import ContactItem from 'components/ContactsItem/ContactsItem';
import { StyledList } from 'components/Contacts/Contacts.styled';

const Contacts = ({ options }) => {
  return (
    <>
      <StyledList>
        {options.map(el => {
          return <ContactItem key={el.id} el={el} />;
        })}
      </StyledList>
    </>
  );
};

export default Contacts;
