import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations';
// import css from './LoginForm.module.css';
import * as yup from 'yup';
import { Error, Input, Button  } from 'components/Form/Form.styled';

import { Formik, Form,   } from "formik";
const initialValues = {

    email: "",
    password: ""
};
const schema = yup.object().shape({
    email: yup.string().email().required(),
password:yup.string().required().min(6)
})

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, {resetForm}) => {
    console.log(values)
    dispatch(
      logIn(
        values
      )
    );
      resetForm();
  };

    return (
      
<Formik initialValues= {initialValues} onSubmit={handleSubmit} validationSchema={schema}>
            
           <Form >
               
               <div>
                   <h3>Email</h3>
    <Input
  type="email"
  name="email"/>
                    <Error name="email" component="div" />
               </div>
<div>
                   <h3>Password</h3>
    <Input
  type="password"
  name="password"

/><Error name="password" component="div" />
               </div>

        <Button type="subbmit" >Log In</Button>
           </Form></Formik>

    //   <form onSubmit={handleSubmit}
    //        validationschema={schema}
    //     //   autoComplete="off"
    //   >
    //   <label >
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label >
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Log In</button>
    // </form>
  );
};

