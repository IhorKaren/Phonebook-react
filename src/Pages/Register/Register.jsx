import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/Auth/operations';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

// const schema = Yup.object().shape({
//   name: Yup.string().required('Name is required!'),
//   number: Yup.string()
//     .required('Number is required!')
//     .min(7, 'Number must be at least 7 digits')
//     .max(16, 'Number must not exceed 16 digits'),
// });

const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //   {
  //     resolver: yupResolver(schema),
  //   }

  const onSubmit = (data, e) => {
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    dispatch(registerUser(newUser));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register('name')} />
        {errors.name && <div>{errors.name?.message}</div>}
      </div>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
