import React, { createContext, useState } from "react";

export const Context = createContext();

export default function Provider({ children }) {
  const [hide, setHide] = useState(false);
  return (
    <Context.Provider value={[hide, setHide]}>{children}</Context.Provider>
  );
}
