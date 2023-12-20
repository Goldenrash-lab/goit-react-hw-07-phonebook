import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6582e45902f747c8367a8619.mockapi.io';

export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', async (_, ThunkAPI) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return ThunkAPI.rejectWithValue(error.message);
  }
});

export const addContactThunk = createAsyncThunk('contacts/addContact', async (contact, ThunkAPI) => {
  try {
    const { data } = await axios.post(`/contacts`, contact);
    return data;
  } catch (error) {
    ThunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (id, ThunkAPI) => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    ThunkAPI.rejectWithValue(error.message);
  }
});
