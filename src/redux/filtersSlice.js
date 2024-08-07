import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        name: ""
    },
       
})

export default filtersSlice.reducer;


export const changeFilter = (name) => {
    return {
      type: "contacts/selectContacts",
      payload: {
        name,
      },
    };
  };
  