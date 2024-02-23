import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   loading: false,
   data: [],
   error: ""
}

const userSlice = createSlice({
   initialState,
   name: "Users",
   reducers: {
      fetchUsersRequest(state) {
         state.loading = true;
         state.error = "";
      },
      fetchUsersSuccess(state, action) {
         state.loading = false;
         state.data = action.payload;
         state.error = "";
      },
      fetchUsersError(state, action) {
         state.loading = false;
         state.error = action.payload;
         state.data = [];
      }
   }
})

export const { fetchUsersError, fetchUsersRequest, fetchUsersSuccess } = userSlice.actions;


export default userSlice.reducer;