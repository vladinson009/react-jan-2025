import { useContext, useEffect, useState } from "react";
import userApi from "../api/userApi";
import { MyContext } from "./userContext";

export default function useTableWrapper() {
    const { users, setUsers, isLoading, setIsLoading, isError, setIsError, isNoContent } = useContext(MyContext)
    const [isModal, setIsModal] = useState({ create: false, edit: false, delete: false, info: false });
    const [selectedUSer, setSelectedUser] = useState({});

    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true);
                const data = Object.values(await userApi.getAll())
                setUsers(data);
                // setValue(data);
                // eslint-disable-next-line no-unused-vars
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })()
    }, [setIsLoading, setIsError, setUsers])
    return {
        users,
        setUsers,
        isLoading,
        setIsLoading,
        setIsError,
        isError,
        isNoContent,
        isModal,
        setIsModal,
        selectedUSer,
        setSelectedUser,
    }
}