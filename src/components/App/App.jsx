
import React from "react";
import { ContactForm } from "../Form/Form";
import { ContactList } from "../List/List";
import { Container } from "./App.styled";
import { Toaster } from 'react-hot-toast';

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../../redux/operations';
import { useAuth } from 'hooks';


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const TasksPage = lazy(() => import('../pages/Tasks'));


export const App = () => {

   const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

    return (
      <Container>
        <h1>PhoneBook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList />
        <Toaster  toastOptions={{duration: 2000} }/>
      </Container >
      
    )

}
