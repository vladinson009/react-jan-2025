import useTable from "../../../hooks/useTable"
import TableRow from "./TableRow"


export default function Table({ users, onShowModal }) {
    const { onSort, usersOnPage, isActive } = useTable(users)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th onClick={onSort}>
                        First name<svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${isActive.firstName && 'active-icon'}`}
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                    </th>
                    <th onClick={onSort}>
                        Last name<svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${isActive.lastName && 'active-icon'}`}
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                    </th>
                    <th onClick={onSort}>
                        Email<svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${isActive.email && 'active-icon'}`}
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                    </th>
                    <th onClick={onSort}>
                        Phone<svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${isActive.phoneNumber && 'active-icon'}`}
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                    </th>
                    <th onClick={onSort}>
                        Created
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            className={`icon svg-inline--fa fa-arrow-down Table_icon__+HHgn ${isActive.created && 'active-icon'}`}
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                    </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* <!-- Table row component --> */}
                {usersOnPage.map(user => <TableRow key={user._id} {...user} onShowModal={onShowModal} />)}
            </tbody>
        </table>
    )
}