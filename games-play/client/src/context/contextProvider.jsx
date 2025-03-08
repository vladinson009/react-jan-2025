import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import context from './userContext';
import { getUserData } from '../utils/userData';


export default function MyProvider({ children }) {
    const { Provider } = context;
    const navigate = useNavigate();
    const [userSession, setUserSession,] = useState(() => getUserData());

    return (
        <Provider value={{ userSession, setUserSession, navigate }}>
            {children}
        </Provider>
    );
}


