import React from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { logIn } from 'Redux/Auth/operations';

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required!'),
  password: Yup.string()
    .required('password is required!')
    .min(5, 'password must be at least 5 digits')
    .max(16, 'password must not exceed 16 digits'),
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register('email')} />
        {errors.email && <div>{errors.email?.message}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register('password')} />
        {errors.password && <div>{errors.password?.message}</div>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
