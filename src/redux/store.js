import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});


// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
// });

// const rooReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "contact/deleteContact": {
//         return state.contacts.items.filter(
//           () => state.contacts.items.id !== action.payload
//         );
//       }
//       default:
//           return state;
//     }
//   };
  
//   export const store = configureStore({ reducer: rooReducer });
  