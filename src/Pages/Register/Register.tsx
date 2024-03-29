import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { isLoading, authError } from 'Redux/Selectors/selectors';
import { registerUser } from '../../Redux/Auth/operations';
import { clearError } from 'Redux/Auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppDispatch } from 'Redux/store';
//
import Button from '@mui/joy/Button';
import FormLabel from '@mui/joy/FormLabel';
import { Link } from '@mui/joy';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import JoySignInSideTemplate from 'components/JoySignInSideTemplate/JoySignInSideTemplate';
import { Thumb, StyledText } from './Register.styled';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  email: Yup.string().required('Email is required!'),
  password: Yup.string()
    .required('Password is required!')
    .min(5, 'Password must be at least 5 digits')
    .max(12, 'Password must not exceed 12 digits'),
});

const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const signInError = useSelector(authError);
  const loading = useSelector(isLoading);

  useEffect(() => {
    if (signInError) {
      toast.error(`Error, please try again.`);
      dispatch(clearError());
    }
  }, [signInError, dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    dispatch(registerUser(newUser));
    reset();
  };

  return (
    <JoySignInSideTemplate>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Thumb>
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
        </Thumb>
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
        <Button
          type="submit"
          loading={loading}
          loadingPosition="end"
          sx={{ marginTop: '10px' }}
        >
          Register
        </Button>
        <Typography fontSize="md">
          Are you already registered?
          <Link component={RouterLink} to="/login" sx={{ marginLeft: '5px' }}>
            Go to login page.
          </Link>
        </Typography>
      </form>
      <ToastContainer theme="colored" position="top-left" />
    </JoySignInSideTemplate>
  );
};

export default RegisterForm;
