import { createSlice } from "@reduxjs/toolkit";
import {selectContacts} from "./contactsSlice"

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
      name: "",
    },
    reducers: {
        changeFilter (state, action) {
        state.name = action.payload;
      },
    },
  });
  


export default filtersSlice.reducer;


export const { changeFilter } = filtersSlice.actions;
export const selectFilter = (state) => state.filters.name;



export const selectFilteredContacts = (state) => {
    const contacts = selectContacts(state);
    const filter = selectFilter(state);
      return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  
