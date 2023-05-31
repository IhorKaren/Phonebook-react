import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/Operations/operations';

import { ContactItem, ContactName, ContactButton } from './ContactsItem.styled';

const ContactsItem = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <ContactName>
        {el.name}: {el.number}
      </ContactName>
      <ContactButton
        type="button"
        onClick={() => dispatch(deleteContact(el.id))}
      >
        Delete
      </ContactButton>
    </ContactItem>
  );
};

export default ContactsItem;
