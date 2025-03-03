import { useCallback, useState } from "react";
import userApi from "../../api/userApi";

export default function CreateEditForm({
    closeModal,
    setUsers,
    user,
    setIsLoading,
    setIsError,

}) {
    const initialValue = {
        firstName: '',
        lastName: '',
        email: '',
        imageUrl: '',
        phoneNumber: '',
        createdAt: true,
        updatedAt: true,
        address: {
            country: '',
            city: '',
            street: '',
            streetNumber: ''
        }
    }
    const [formState, setFormState] = useState(user ? user : initialValue);
    const isValidInput = useCallback((formState) => {
        for (const key in formState) {
            if (key == 'address') {
                for (const adr in formState[key]) {
                    if (formState[key][adr] == '') {
                        return false;
                    }
                }
            } else {
                if (formState[key] == '') {
                    return false;
                }
            }
        }
        return true
    }, []);
    function onChange(e) {
        const { name, value } = e.target;
        setFormState((state) => {
            const newState = { ...state };
            if (name == 'country' || name == 'city' || name == 'street' || name == 'streetNumber') {
                newState.address[name] = value;
            } else {
                newState[name] = value
            }
            return newState;
        })
    }
    async function onCreate(e) {
        e.preventDefault();
        if (isValidInput(formState) == false) {
            return
        }
        try {
            closeModal()
            setIsLoading(true);
            const date = new Date().toISOString();
            const data = { ...formState, updatedAt: date, createdAt: date };
            const newUser = await userApi.createUser(data)
            setUsers(state => ([...state, newUser]))

            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }
    async function onEdit(e) {
        e.preventDefault();
        if (isValidInput(formState) == false) {
            return
        }
        try {
            closeModal()
            setIsLoading(true);
            const date = new Date().toISOString();
            const data = { ...formState, updatedAt: date };
            const newUser = await userApi.updateByUserId(user._id, data);
            setUsers(state => {
                const idx = state.findIndex(el => el._id == user._id)
                state.splice(idx, 1, newUser);
                return [...state];
            })
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        //  < !--Create / Edit Form component-- >
        < div className="overlay" >
            <div onClick={closeModal} className="backdrop"></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>{user ? 'Edit' : 'Add'} User</h2>
                        <button onClick={closeModal} className="btn close">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="firstName" name="firstName" type="text" onChange={onChange} value={formState.firstName} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="lastName" name="lastName" type="text" onChange={onChange} value={formState.lastName} />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-envelope"></i></span>
                                    <input id="email" name="email" type="text" onChange={onChange} value={formState.email} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input id="phoneNumber" name="phoneNumber" type="text" onChange={onChange} value={formState.phoneNumber} />
                                </div>
                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-image"></i></span>
                                <input id="imageUrl" name="imageUrl" type="text" onChange={onChange} value={formState.imageUrl} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="country" name="country" type="text" onChange={onChange} value={formState.address.country} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-city"></i></span>
                                    <input id="city" name="city" type="text" onChange={onChange} value={formState.address.city} />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-map"></i></span>
                                    <input id="street" name="street" type="text" onChange={onChange} value={formState.address.street} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetNumber">Street number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-house-chimney"></i></span>
                                    <input id="streetNumber" name="streetNumber" type="text" onChange={onChange} value={formState.address.streetNumber} />
                                </div>
                            </div>
                        </div>
                        <div id="form-actions">
                            <button
                                onClick={user ? onEdit : onCreate}
                                id="action-save"
                                className="btn"
                                type="submit"
                            >{user ? 'Edit' : 'Add'}</button>
                            <button
                                onClick={closeModal}
                                id="action-cancel"
                                className="btn"
                                type="button">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}