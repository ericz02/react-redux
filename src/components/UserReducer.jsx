import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const userSlice = createSlice({

  // my understanding is that these are actions (name, initial state, and reducer)

  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      console.log(action)
    }
  }

})

export default userSlice.reducer;
