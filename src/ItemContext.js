import React, { createContext, useReducer } from 'react';

export const ListContext = createContext();

const initialState = [];

const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listReducer, initialState);

  return (
    <ListContext.Provider value={{ state, dispatch }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContext;