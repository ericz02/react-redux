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
    deleteUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uu = state.find(user => user.id == id)
      if (uu) {
        return state.filter(f => f.id != id);
      }
    }
  }

})

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
