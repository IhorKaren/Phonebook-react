import * as React from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { logIn } from 'Redux/Auth/operations';
import Button from '@mui/joy/Button';
import FormLabel from '@mui/joy/FormLabel';
import Typography from '@mui/joy/Typography';
import { Link } from '@mui/joy';
import Input from '@mui/joy/Input';
import { Thumb, StyledText } from './Login.styled';
import JoyLogInSideTemplate from 'components/JoyLogInSideTemplate/JoyLogInSideTemplate';
import { Link as RouterLink } from 'react-router-dom';

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required!'),
  password: Yup.string()
    .required('Password is required!')
    .min(5, 'Password must be at least 5 digits')
    .max(16, 'Password must not exceed 16 digits'),
});

const LoginForm = () => {
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
    const user = {
      email: data.email,
      password: data.password,
    };
    dispatch(logIn(user));
    reset();
  };

  return (
    <JoyLogInSideTemplate>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Thumb>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            type="email"
            id="email"
            {...register('email')}
            error={Boolean(errors.email)}
          />
          {errors.email && (
            <StyledText color="danger" fontSize="sm">
              {errors.email?.message}
            </StyledText>
          )}
        </Thumb>
        <Thumb>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <Input
            type="password"
            id="password"
            {...register('password')}
            error={Boolean(errors.password)}
          />
          {errors.password && (
            <StyledText color="danger" fontSize="sm">
              {errors.password?.message}
            </StyledText>
          )}
        </Thumb>
        <Button type="submit" sx={{ marginTop: '10px' }}>
          Login
        </Button>
        <Typography fontSize="md">
          New to Phonebook?
          <Link
            component={RouterLink}
            to="/register"
            sx={{ marginLeft: '5px' }}
          >
            Sign up now.
          </Link>
        </Typography>
      </form>
    </JoyLogInSideTemplate>
  );
};

export default LoginForm;
