import { useContext, useEffect } from "react";

import context from "../../context/userContext";
import userApi from "../../api/userApi";
import { clearUserData } from "../../utils/userData";
import { Navigate } from "react-router-dom";


export default function Logout() {
    const { setUserSession } = useContext(context)

    useEffect(() => {
        userApi.logout()
        setUserSession(null);
        clearUserData();
    }, [setUserSession])

    return <Navigate to='/' />
}