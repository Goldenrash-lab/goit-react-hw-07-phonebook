import React from 'react';
import { SearchWrapper } from './SearchContact.styled';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { searchContact } from 'store/contactsSlice';

export const SearchContact = () => {
  const dispatch = useDispatch();

  function handleChange({ target: { value } }) {
    dispatch(searchContact(value));
  }
  return (
    <SearchWrapper>
      <label htmlFor="search">Find contact:</label>
      <Input onChange={handleChange} type="text" id="search" />
    </SearchWrapper>
  );
};
