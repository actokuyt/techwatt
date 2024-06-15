"use client"

import React from "react";

type NewValueType = string | null;

type ProviderTypes = {
  children: React.ReactNode;
};

type MuiAutoCompleteContextType = {
  searchInputValue: string | null;
  handleChange: (value: NewValueType) => void;
}

const MuiAutoCompleteContext = React.createContext<MuiAutoCompleteContextType>({
  searchInputValue: null,
  handleChange: () => {},
});

export const useMuiAutoCompleteContext = () =>
  React.useContext(MuiAutoCompleteContext);

export const AdminDashboardProvider = ({ children }: ProviderTypes) => {
  const [searchInputValue, setSearchInputValue] =
    React.useState<NewValueType>(null);

  function handleChange(newValue: NewValueType) {
    setSearchInputValue(newValue);
  }

  return (
    <MuiAutoCompleteContext.Provider value={{ searchInputValue, handleChange }}>
      {children}
    </MuiAutoCompleteContext.Provider>
  );
};
