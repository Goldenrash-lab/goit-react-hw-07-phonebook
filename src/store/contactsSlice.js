import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from './contactsThunk';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    searchContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContactsThunk.pending, state => {
      state.contacts.isLoading = true;
    });

    builder.addCase(fetchContactsThunk.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    });

    builder.addCase(fetchContactsThunk.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });

    builder.addCase(addContactThunk.pending, state => {
      state.contacts.isLoading = true;
    });

    builder.addCase(addContactThunk.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items.push(action.payload);
    });

    builder.addCase(addContactThunk.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });

    builder.addCase(deleteContactThunk.pending, state => {
      state.contacts.isLoading = true;
    });

    builder.addCase(deleteContactThunk.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = state.contacts.items.filter(el => el.id !== action.payload.id);
    });

    builder.addCase(deleteContactThunk.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
  },
});

export const phonebookReducer = phonebookSlice.reducer;

export const { addContact, deleteContact, searchContact } = phonebookSlice.actions;
