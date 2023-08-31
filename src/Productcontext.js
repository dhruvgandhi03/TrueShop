import { createContext, useState } from "react";

export const MainData = createContext(null);

const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
function Context({ children }) {
  const [value, setValue] = useState(getLocalData());
  return (
    <MainData.Provider value={{ value, setValue }}>
      {children}
    </MainData.Provider>
  );
}
export default Context;
