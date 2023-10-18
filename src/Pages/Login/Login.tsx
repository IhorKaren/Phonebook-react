import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { logIn } from 'Redux/Auth/operations';
import { clearError } from 'Redux/Auth/authSlice';
import { isLoading, authError } from 'Redux/Selectors/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppDispatch } from 'Redux/store';
//
import Button from '@mui/joy/Button';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import { Link } from '@mui/joy';
import { Thumb, StyledText } from './Login.styled';
import JoyLogInSideTemplate from 'components/JoyLogInSideTemplate/JoyLogInSideTemplate';
import { Link as RouterLink } from 'react-router-dom';

type FormValues = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required!'),
  password: Yup.string().required('Password is required!'),
});

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loginError: boolean = useSelector(authError);
  const loading: boolean = useSelector(isLoading);

  useEffect(() => {
    if (loginError) {
      toast.error(`Incorrect email or password`);
      dispatch(clearError());
    }
  }, [loginError, dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
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
        <Button
          type="submit"
          loading={loading}
          loadingPosition="end"
          sx={{ marginTop: '10px' }}
        >
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
      <ToastContainer theme="colored" position="top-left" />
    </JoyLogInSideTemplate>
  );
};

export default LoginForm;
