import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
const initialState = [];
export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    isSelected: (state, action) => {
      let myIndex = state.findIndex((state) => state.id === action.payload);
      state = [...state, (state[myIndex].isDid = !state[myIndex].isDid)];
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    addTask: (
      state,
      {
        payload: {
          id,
          taskData: { task, date },
        },
      }
    ) => {
      return (state = [...state, { task, date, isDid: true, id }]);
    },
  },
});
export const { isSelected, deleteTask, addTask, filterByDate } =
  todoSlice.actions;
export default todoSlice.reducer;
