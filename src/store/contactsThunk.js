import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6582e45902f747c8367a8619.mockapi.io';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);
