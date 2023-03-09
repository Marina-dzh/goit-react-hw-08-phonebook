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

const handleSubmit = (values, {resetForm}) => {
    
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
