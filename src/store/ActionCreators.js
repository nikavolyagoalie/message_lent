import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
  

export const fetchMessages = createAsyncThunk(
    'Messages/fetchAll',
    async (_, thunkAPI) => {
        const bodyFormData = new FormData();
        bodyFormData.append('actionName', 'MessagesLoad');
        try {
            const res = await axios({
                method: "post",
                url: "http://f0665380.xsph.ru/",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            console.log(res);
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue("Ошибка загрузки")
        }
    }
)