import { useDeleteContactMutation } from 'Redux/Contacts/contactsApi';
import Avatar from '@mui/joy/Avatar';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';

const ContactsItem = ({ el }) => {
  const [deleteContact, result] = useDeleteContactMutation();
  const firstLetter = [...el.name];

  return (
    <ListItem sx={{ maxWidth: '500px' }}>
      <Avatar>{firstLetter[0]}</Avatar>
      <Typography component="p" sx={{ ml: '8px' }}>
        {el.name}: {el.number}
      </Typography>
      <Button
        color="danger"
        type="button"
        loading={result.isLoading}
        onClick={() => deleteContact(el.id)}
        sx={{ ml: 'auto' }}
      >
        Delete
      </Button>
    </ListItem>
  );
};

export default ContactsItem;
