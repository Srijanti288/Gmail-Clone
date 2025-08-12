import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: false,
    emails: [],
    selectedEmail: null,
    searchText: "",
    user: null // Will store plain object with user details
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setEmails: (state, action) => {
      state.emails = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setUser: (state, action) => {
      // Store only serializable values
      state.user = action.payload
        ? {
            displayName: action.payload.displayName || "",
            email: action.payload.email || "",
            photoURL: action.payload.photoURL || ""
          }
        : null;
    }
  }
});

export const {
  setOpen,
  setEmails,
  setSelectedEmail,
  setSearchText,
  setUser
} = appSlice.actions;

export default appSlice.reducer;
