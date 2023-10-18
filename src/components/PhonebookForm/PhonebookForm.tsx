import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { StyledText, StyledForm } from './PhonebookFrom.styled';

type FormValues = {
  name: string;
  number: string;
};

type FormProps = {
  isLoading: boolean;
  addContact: (name: string, number: string) => void;
};

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  number: Yup.string()
    .required('Number is required!')
    .min(7, 'Number must be at least 7 digits')
    .max(16, 'Number must not exceed 16 digits'),
});

const PhonebookForm: FC<FormProps> = ({ addContact, isLoading }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    addContact(data.name, data.number);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <Input
          type="text"
          id="name"
          {...register('name')}
          error={Boolean(errors.name)}
        />
        {errors.name && (
          <StyledText color="danger" fontSize="sm">
            {errors.name?.message}
          </StyledText>
        )}
      </div>
      <div>
        <FormLabel htmlFor="number">Number:</FormLabel>
        <Input
          type="tel"
          id="number"
          {...register('number')}
          error={Boolean(errors.name)}
        />
        {errors.number && (
          <StyledText color="danger" fontSize="sm">
            {errors.number?.message}
          </StyledText>
        )}
      </div>
      <Button
        type="submit"
        loading={isLoading}
        loadingPosition="end"
        sx={{ height: '40px', mt: 'auto' }}
      >
        <PersonAddAltIcon sx={{ mr: '5px' }} /> Add contact
      </Button>
    </StyledForm>
  );
};

export default PhonebookForm;
