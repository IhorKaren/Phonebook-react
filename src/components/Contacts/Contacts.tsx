import { FC } from 'react';
import ContactItem from 'components/ContactsItem/ContactsItem';
import { StyledList } from 'components/Contacts/Contacts.styled';
import { Contact } from 'components/App.types';

type ContactsProps = {
  array: Contact[];
};

const Contacts: FC<ContactsProps> = ({ array }) => {
  return (
    <>
      <StyledList>
        {array.map(el => {
          return <ContactItem key={el.id} el={el} />;
        })}
      </StyledList>
    </>
  );
};

export default Contacts;
