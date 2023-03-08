// import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactForm } from "../components/Form/Form";
import { ContactList } from '../components/List/List';
import { Container } from "../components/App/App.styled";
import { Toaster } from 'react-hot-toast';

// import { fetchTasks } from '../redux/operations';
import { selectLoading } from '../redux/selectors';

export default function Contacts() {
//   const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your phoneBook</title>
          </Helmet>
                <Container>
        <h1>PhoneBook</h1>
        <ContactForm />
              <h2>Contacts</h2>
              <div>{isLoading && 'Request in progress...'}</div>
        <ContactList />
        <Toaster  toastOptions={{duration: 2000} }/>
          </Container >
     
    </>
  );
}
