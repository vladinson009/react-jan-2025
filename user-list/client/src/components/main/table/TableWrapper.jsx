import { useContext, useEffect, useState } from "react";
import userApi from "../../../api/userApi";
import NoUsers from "./overlap/NoUsers";
import Spinner from "./overlap/Spinner";
import OnError from "./overlap/OnError";
import CreateEditForm from "../../modals/CreateEditForm";
import DeleteUser from "../../modals/DeleteUser";
import UserDetails from "../../modals/UserDetails";
import { MyContext } from "../../../hooks/userContext";
import NoContent from "./overlap/NoContent";
import Table from "./Table";

export default function TableComponent() {
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
                            : isModal.info && <UserDetails closeModal={onCloseModal} setIsError={setIsError} user={selectedUSer} />}
                {/* <!-- Overlap components  --> */}
                {isLoading
                    ? <Spinner />
                    : isError
                        ? <OnError />
                        : isNoContent
                            ? <NoContent />
                            : users.length < 1
                                ? <NoUsers />
                                : <Table users={users} onShowModal={onShowModal} />
                }
            </div >
            {/* <!-- New user button  --> */}
            <button onClick={onShowModal.bind(null, 'create')} className="btn-add btn">Add new user</button>
        </>
    )
}