import { useState } from 'react';
import { MyContext } from './userContext';


export function MyProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNoContent, setIsNoContent] = useState(false);
  return (
    <MyContext.Provider value={{
      users, setUsers,
      isLoading, setIsLoading,
      isError, setIsError,
      isNoContent, setIsNoContent
    }}>{children}</MyContext.Provider>
  );
}
