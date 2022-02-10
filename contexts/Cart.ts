import { useReducer } from "react";

export const DataProvider = ({ children }) => {
  const initialState = { cart: [] };
  const [state, dispatch] = useReducer(reducers, initialState);
};
