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
  const { filter } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  function filteredContacts() {
    if (filter) return items.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
    else return items;
  }

  return (
    <ul>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {filteredContacts().map(el => (
        <ContactItem key={el.id}>
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
