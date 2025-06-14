import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";


const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
    error: null
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
             })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
             })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items.push(action.payload);
             })
            .addCase(addContact.rejected, (state, action) => {
                state.loading = false;
                 state.error = action.payload;
             })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = state.items.filter(item => item.id !== action.payload.id)
             })
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false;
                 state.error = action.payload;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
    })
});

export default slice.reducer;