import { useContext } from "react";

import context from "../../context/userContext";
import userApi from "../../api/userApi";
import { clearUserData } from "../../utils/userData";


export default function Logout() {
    const { setUserSession, navigate } = useContext(context)

    userApi.logout().then(() => {
        clearUserData();
        setUserSession(null);
    }).catch(err => {
        return alert(err);
    })
    navigate('/')
}