import { useActionState, useContext } from "react";
import userApi from "../../api/userApi";
import context from "../../context/userContext";
import { Link } from "react-router-dom";

export default function RegisterSection() {
    const initialState = { email: '', password: '', 'confirm-password': '' }
    const [state, formAction, isPending] = useActionState(onRegister, initialState);
    const { setUserSession, navigate } = useContext(context)

    async function onRegister(previousState, formData) {
        const userInput = Object.fromEntries(formData);
        try {
            const user = await userApi.register(userInput)
            const userData = {
                _id: user._id,
                email: user.email,
                accessToken: user.accessToken,
            }
            setUserSession(userData);
            setUserSession(userData);
            navigate('/');
        } catch (error) {
            return { userInput, error }
        }

    }
    return (
        <section id="register-page" className="content auth">
            <form action={formAction} id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>
                    {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        defaultValue={state?.userInput?.email}
                    />
                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input disabled={isPending} className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/users/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section >
    )
}