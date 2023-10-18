import { FC } from 'react';
import { useDeleteContactMutation } from 'Redux/Contacts/contactsApi';
import Box from '@mui/joy/Box';
import Avatar from '@mui/joy/Avatar';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Underline from './Underline';
import { Contact } from 'components/App.types';

type ContactsItemProps = {
  el: Contact;
};

const ContactsItem: FC<ContactsItemProps> = ({ el }) => {
  const [deleteContact, result] = useDeleteContactMutation();
  const firstLetter = el.name[0];

  return (
    <ListItem sx={{ maxWidth: '500px' }}>
      <Avatar>{firstLetter}</Avatar>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography component="p" sx={{ ml: '8px' }}>
          {el.name}
        </Typography>
        <Typography component="p" level="body2" sx={{ ml: '8px' }}>
          Phone: {el.number}
        </Typography>
      </Box>
      <Button
        color="danger"
        type="button"
        loading={result.isLoading}
        onClick={() => deleteContact(el.id)}
        sx={{ ml: 'auto' }}
      >
        Delete
      </Button>
      <Underline />
    </ListItem>
  );
};

export default ContactsItem;
