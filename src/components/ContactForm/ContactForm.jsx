import React, { useState } from 'react';
import { Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'store/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handlerChangeName = e => {
    setName(e.target.value);
  };
  const handlerChangePhone = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let isExists = contacts.some(el => el.name === name);

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (isExists) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <Input
        id="name"
        onChange={handlerChangeName}
        type="text"
        name="name"
        value={name}
        required
      />
      <label htmlFor="phone">Phone</label>
      <Input
        id="phone"
        onChange={handlerChangePhone}
        type="tel"
        name="number"
        value={number}
        required
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
};
