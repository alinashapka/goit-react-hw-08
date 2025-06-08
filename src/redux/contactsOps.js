import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://68384fbf2c55e01d184cc96d.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const res = await axios.get("/contacts");
        return res.data;
    }
catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
    try {
        const res = await axios.post("/contacts", newContact);
        return res.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const res = await axios.delete(`/contacts/${contactId}`);
        return res.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

