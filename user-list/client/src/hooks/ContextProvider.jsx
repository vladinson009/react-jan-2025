import { useState } from 'react';
import { MyContext } from './userContext';


export function MyProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNoContent, setIsNoContent] = useState(false);
  const [pageSize, setPageSize] = useState(5)
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <MyContext.Provider value={{
      users, setUsers,
      isLoading, setIsLoading,
      isError, setIsError,
      isNoContent, setIsNoContent,
      pageSize, setPageSize,
      currentPage, setCurrentPage

    }}>{children}</MyContext.Provider>
  );
}
