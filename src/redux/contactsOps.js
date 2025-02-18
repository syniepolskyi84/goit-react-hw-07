import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://67b41d9c392f4aa94fa9660c.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            console.log("API Response:", response.data); 
            return response.data;
        } catch (error) {
            console.error("Fetch error:", error);
            return thunkAPI.rejectWithValue(error.message);
        }
});


export const addContact = createAsyncThunk("contacts/addContact", 
    async (contact, thunkAPI) => {
        try {
            const responce = await axios.post('/contacts', contact);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk("contacts/deleteContact", 
    async (contactID, thunkAPI) => {
        try {
            const responce = await axios.delete(`/contacts/${contactID}`);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
) 