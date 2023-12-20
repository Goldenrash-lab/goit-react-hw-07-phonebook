import React, { useEffect } from 'react';
import { DeleteBtn, ContactItem } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, fetchContactsThunk } from 'store/contactsThunk';

export const ContactsList = () => {
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteContactThunk(id));
  }

  const { items, error, isLoading } = useSelector(state => state.contacts.contacts);
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <ul>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {items.map(el => (
        <ContactItem key={crypto.randomUUID()}>
          <h4>
            {el.name}: {el.phone}
          </h4>
          <DeleteBtn
            onClick={() => {
              handleDelete(el.id);
            }}
            type="button"
          >
            DELETE
          </DeleteBtn>
        </ContactItem>
      ))}
    </ul>
  );
};
