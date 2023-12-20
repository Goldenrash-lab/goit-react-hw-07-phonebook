import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk } from './contactsThunk';

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
  // reducers: {
  //   addContact: (state, action) => {
  //     state.contacts.push(action.payload);
  //   },
  //   deleteContact: (state, action) => {
  //     state.contacts = state.contacts.filter(el => el.id !== action.payload);
  //   },
  //   searchContact: (state, action) => {
  //     state.filter = action.payload;
  //   },
  // },
  extraReducers: builder => {
    builder.addCase(fetchContactsThunk.pending, (state, action) => {
      state.contacts.isLoading = true;
    });
    builder.addCase(fetchContactsThunk.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    });
  },
});

export const phonebookReducer = phonebookSlice.reducer;

export const { addContact, deleteContact, searchContact } =
  phonebookSlice.actions;
