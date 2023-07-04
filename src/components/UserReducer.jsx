import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const userSlice = createSlice({

  // my understanding is that these are actions (name, initial state, and reducer)

  name: "users",
  initialState: userList,     //imported from Data.jsx and assigned it to inital state
  reducers: {
    
  }

})

export default userSlice.reducer;
