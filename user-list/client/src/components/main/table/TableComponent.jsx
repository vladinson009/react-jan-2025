import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import userApi from "../../../api/userApi";
import NoUsers from "./overlap/NoUsers";
import Spinner from "./overlap/Spinner";
import OnError from "./overlap/OnError";
import CreateEditForm from "../../modals/CreateEditForm";
import DeleteUser from "../../modals/DeleteUser";
import UserDetails from "../../modals/UserDetails";

export default function TableComponent() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isModal, setIsModal] = useState({ create: false, edit: false, delete: false, info: false });
    const [selectedUSer, setSelectedUser] = useState({});

    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true);
                const data = Object.values(await userApi.getAll())
                setUsers(data);
                // eslint-disable-next-line no-unused-vars
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })()
    }, [])

    function onShowModal(type, _id) {
        _id ? setSelectedUser(users.find(el => el._id == _id)) : null
        setIsModal(state => ({ ...state, [type]: true }));
    }

    function onCloseModal() {
        setIsModal((state) => {
            const newState = {};
            for (const modal in state) {
                newState[modal] = false
            }
            return newState;
        })
    }
    return (
        <>
            <div className="table-wrapper">
                {isModal.create ? <CreateEditForm closeModal={onCloseModal} setUsers={setUsers} setIsLoading={setIsLoading} setIsError={setIsError} />
                    : isModal.edit ? <CreateEditForm closeModal={onCloseModal} setUsers={setUsers} setIsLoading={setIsLoading} setIsError={setIsError} user={selectedUSer} />
                        : isModal.delete ? <DeleteUser closeModal={onCloseModal} setUsers={setUsers} setIsLoading={setIsLoading} setIsError={setIsError} user={selectedUSer} />
                            : isModal.info ? <UserDetails closeModal={onCloseModal} setIsError={setIsError} user={selectedUSer} />
                                : null}
                {/* <!-- Overlap components  --> */}
                {isLoading
                    ? <Spinner />
                    : isError
                        ? <OnError />
                        : users.length < 1
                            ? <NoUsers />
                            : <table className="table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>
                                            First name<svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="arrow-down"
                                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
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
                                        <th>
                                            Last name<svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="arrow-down"
                                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
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
                                        <th>
                                            Email<svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="arrow-down"
                                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
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
                                        <th>
                                            Phone<svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="arrow-down"
                                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
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
                                        <th>
                                            Created
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="arrow-down"
                                                className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
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
                                    {users.map(user => <TableRow key={user._id} {...user} onShowModal={onShowModal} />)}

                                </tbody>
                            </table>
                }

            </div >
            {/* <!-- New user button  --> */}
            <button onClick={onShowModal.bind(null, 'create')} className="btn-add btn">Add new user</button>
        </>
    )
}