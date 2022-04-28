import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchMessages = createAsyncThunk(
    'Messages/fetchAll',
    async (_, thunkAPI) => {
        try {
            const headers = {
                'Content-Type':'multipart/form-data'
            };
            const res = await axios.post('http://f0665380.xsph.ru/', { headers });
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Ошибка загрузки")
        }
    }
)