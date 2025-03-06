
import NoUsers from "./overlap/NoUsers";
import Spinner from "./overlap/Spinner";
import OnError from "./overlap/OnError";
import NoContent from "./overlap/NoContent";

import CreateEditForm from "../../modals/CreateEditForm";
import DeleteUser from "../../modals/DeleteUser";
import UserDetails from "../../modals/UserDetails";
import Table from "./Table";

import useTableWrapper from "../../../hooks/useTableWrapper";

export default function TableComponent() {
    const {
        users,
        isLoading,
        isError,
        isNoContent,
        isModal,
        selectedUSer,
        setIsModal,
        setSelectedUser,
        setUsers,
        setIsError,
        setIsLoading
    } = useTableWrapper()
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
                {isLoading && <Spinner />}
                {isError && <OnError />}
                {isNoContent
                    ? <NoContent />
                    : users.length < 1
                        ? <NoUsers />
                        : <Table users={users} onShowModal={onShowModal} />}
            </div >
            {/* <!-- New user button  --> */}
            <button onClick={onShowModal.bind(null, 'create')} className="btn-add btn">Add new user</button>
        </>
    )
}