
import React from "react";
// import { ContactForm } from "../Form/Form";
// import { ContactList } from "../List/List";
// import { Container } from "./App.styled";
// import { Toaster } from 'react-hot-toast';

import {  lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
 import { refreshUser } from '../../redux/operations';
import { useAuth } from '../../hooks/useAuth';
import { PulseLoader } from "react-spinners";

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));


export const App = () => {

     const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
   <PulseLoader
  color="black"
                cssOverride={{
                    position: "absolute",
                    left:"45%"
                    
                }}
  margin={2}
  size={6}
  speedMultiplier={2}
/>
  ) : (
    <Routes>
        <Route path="/" element={<Layout />}>
          
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
  // (
      // <Container>
      //   <h1>PhoneBook</h1>
      //   <ContactForm />
      //   <h2>Contacts</h2>
      //   <ContactList />
      //   <Toaster  toastOptions={{duration: 2000} }/>
      // </Container >
      
  //   )

}


