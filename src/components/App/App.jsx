import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { SearchContact } from '../SearchContact/SearchContact';
import { AppWrapper, PhoneBook } from './App.styled';

export const App = () => {
  return (
    <AppWrapper>
      <PhoneBook>
        <h3>Phonebook</h3>
        <ContactForm />
        <h3>Contacts</h3>
        <SearchContact />
        <ContactsList />
      </PhoneBook>
    </AppWrapper>
  );
};
