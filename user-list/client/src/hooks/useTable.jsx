import { useContext, useEffect, useState } from "react"
import { MyContext } from './userContext'

const tuples = {
    'First name': 'firstName',
    'Last name': 'lastName',
    'Email': 'email',
    'Phone': 'phoneNumber',
    'Created': 'createdAt',
}
export default function useTable(users) {
    const [pureUsers, setPureUsers] = useState(users)
    const { currentPage, pageSize } = useContext(MyContext);
    const [usersOnPage, setUsersOnPage] = useState(pureUsers.slice(pageSize * (currentPage - 1), (currentPage) * pageSize))
    const [sortingOrder, setSortingOrder] = useState(true);
    const [isActive, setIsActive] = useState({ firstName: false, lastName: false, email: false, phoneNumber: false, created: false })
    useEffect(() => {
        setUsersOnPage(pureUsers.slice(pageSize * (currentPage - 1), (currentPage) * pageSize))
    }, [currentPage, pageSize, pureUsers])
    function onSort(e) {
        const textContent = e.currentTarget.textContent;
        const criteria = tuples[textContent];
        setIsActive(state => {
            const newState = { ...state };
            for (const el in newState) {
                el == criteria ? newState[el] = true : newState[el] = false
            }
            return newState
        })
        setSortingOrder(state => !state);
        setPureUsers(state => {
            if (sortingOrder) {
                return [...state].toSorted((a, b) => a[criteria].localeCompare(b[criteria]))
            } else {
                return [...state].toSorted((a, b) => b[criteria].localeCompare(a[criteria]))
            }
        })
    }
    return { onSort, usersOnPage, isActive }
}