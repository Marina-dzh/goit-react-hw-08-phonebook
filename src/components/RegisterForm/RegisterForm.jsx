import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations';
// import css from './RegisterForm.module.css';
import { Container } from "../App/App.styled";
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
      console.log(form.elements.name.value,form.elements.email.value,form.elements.password.value)
    form.reset();
  };

    return (
      <Container>
      <form onSubmit={handleSubmit}
        //   autoComplete="off"
      >
      <label >
        Username
        <input type="text" name="name" />
      </label>
      <label >
        Email
        <input type="email" name="email" />
      </label>
      <label >
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form></Container>
  );
};
