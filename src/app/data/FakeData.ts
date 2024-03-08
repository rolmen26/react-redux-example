import axios from 'axios';
import { Users } from '../types/Users'
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data as Users[];
    }
);