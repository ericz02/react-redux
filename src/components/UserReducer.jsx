import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const userSlice = createSlice({

  // my understanding is that these are actions (name, initial state, and reducer)

  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uu = state.find(user => user.id == id)
      if (uu) {
        uu.name = name;
        uu.email = email;
      }
    },
  }

})

export const { addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
