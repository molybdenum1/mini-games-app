import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  firstName: string;
  secondName: string;
  email: string;
  balance: number;
}

const initialState: IUser = {
  firstName: "Jonny",
  secondName: "Bravo",
  email: "jonnyBravo@gmail.com",
  balance: 1000,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setSecondName: (state, action: PayloadAction<string>) => {
      state.secondName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    placeBet: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload;
    },
    addWinnings: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    resetBalance: (state) => {
      state.balance = initialState.balance;
    },
  },
});

export const {
  addWinnings,
  placeBet,
  resetBalance,
  setBalance,
  setEmail,
  setFirstName,
  setSecondName,
} = UserSlice.actions;

export default UserSlice.reducer;
