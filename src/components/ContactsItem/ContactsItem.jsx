import { useDeleteContactMutation } from 'Redux/Contacts/contactsApi';
import { ContactItem, ContactName, ContactButton } from './ContactsItem.styled';

const ContactsItem = ({ el }) => {
  const [deleteContact, result] = useDeleteContactMutation();

  return (
    <ContactItem>
      <ContactName>
        {el.name}: {el.number}
      </ContactName>
      <ContactButton
        type="button"
        disabled={result.isLoading}
        onClick={() => deleteContact(el.id)}
      >
        Delete
      </ContactButton>
    </ContactItem>
  );
};

export default ContactsItem;
