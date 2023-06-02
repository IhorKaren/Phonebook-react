import ContactItem from 'components/ContactsItem/ContactsItem';
import { StyledList } from 'components/Contacts/Contacts.styled';

const Contacts = ({ options }) => {
  const fromLast = [...options].reverse();

  return (
    <>
      <StyledList>
        {fromLast.map(el => {
          return <ContactItem key={el.id} el={el} />;
        })}
      </StyledList>
    </>
  );
};

export default Contacts;
