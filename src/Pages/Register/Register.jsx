import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/Auth/operations';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import Button from '@mui/joy/Button';
import FormLabel from '@mui/joy/FormLabel';
import { Link } from '@mui/joy';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import JoySignInSideTemplate from 'components/JoySignInSideTemplate/JoySignInSideTemplate';
import { Link as RouterLink } from 'react-router-dom';
import { Thumb, StyledText } from './Register.styled';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  email: Yup.string().required('Email is required!'),
  password: Yup.string()
    .required('Password is required!')
    .min(5, 'Password must be at least 5 digits')
    .max(12, 'Password must not exceed 12 digits'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    console.log(newUser);
    dispatch(registerUser(newUser));
    reset();
  };

  return (
    <JoySignInSideTemplate>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Thumb>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <Input type="text" id="name" {...register('name')} />
          {errors.name && (
            <StyledText color="danger" fontSize="sm">
              {errors.name?.message}
            </StyledText>
          )}
        </Thumb>
        <Thumb>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input type="email" id="email" {...register('email')} />
          {errors.email && (
            <StyledText color="danger" fontSize="sm">
              {errors.email?.message}
            </StyledText>
          )}
        </Thumb>
        <Thumb>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <Input type="password" id="password" {...register('password')} />
          {errors.password && (
            <StyledText color="danger" fontSize="sm">
              {errors.password?.message}
            </StyledText>
          )}
        </Thumb>
        <Button type="submit" sx={{ marginTop: '10px' }}>
          Register
        </Button>
        <Typography fontSize="md">
          Are you already registered?
          <Link component={RouterLink} to="/login" sx={{ marginLeft: '5px' }}>
            Go to login page.
          </Link>
        </Typography>
      </form>
    </JoySignInSideTemplate>
  );
};

export default RegisterForm;
