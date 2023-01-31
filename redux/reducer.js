import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: { toggleForm: false, formId: null },
};

const ReducerSlice = createSlice({
  name: "employeeapp",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
    updateAction: (state, action) => {
      state.client.formId = action.payload;
    },
  },
});

export const { toggleChangeAction, updateAction } = ReducerSlice.actions;

export default ReducerSlice.reducer;
