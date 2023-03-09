import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations';
import { Formik, Form, } from "formik";
import * as yup from 'yup';
import { Error, Input, Button  } from 'components/Form/Form.styled';
// import css from './RegisterForm.module.css';
import { Container } from "../App/App.styled";
const initialValues = {
name:"",
    email: "",
    password: ""
};
const schema = yup.object().shape({
  name:yup.string().required(),
    email: yup.string().email().required(),
password:yup.string().required().min(8)
})


export const RegisterForm = () => {
  const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     register({
  //       name: form.elements.name.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //     console.log(form.elements.name.value,form.elements.email.value,form.elements.password.value)
  //   form.reset();
  // };
const handleSubmit = (values, {resetForm}) => {
    console.log(values)
    dispatch(
      register(
        values
      )
    );
      resetForm();
  };
    return (
      <Container>
      <Formik initialValues= {initialValues} onSubmit={handleSubmit} validationSchema={schema}
        //   autoComplete="off"
        >
            <Form >
     <div> <h3 >
        Username</h3>
              <Input type="text" name="name" />
              <Error name="email" component="div" />
      </div>
     <div><h3 >
        Email</h3>
              <Input type="email" name="email" />
              <Error name="email" component="div" />
      </div> 
      <div><h3 >
        Password</h3>
              <Input type="password" name="password" />
              <Error name="email" component="div" />
      </div>
            <Button type="submit">Register</Button>
          </Form>
      
    </Formik></Container>
  );
};
