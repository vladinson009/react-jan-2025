import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import userApi from "../../api/userApi";
import { setUserData } from "../../utils/userData";
import context from "../../context/userContext";


export default function LoginSection() {
    const { setUserSession, navigate } = useContext(context)
    const [error, isError] = useState(false);
    const [isPassword, setIsPassword] = useState('');
    function onSubmit(e) {
        e.preventDefault();
        const userInput = Object.fromEntries(new FormData(e.target));
        userApi.login(userInput).then(response => {
            const userData = {
                _id: response._id,
                email: response.email,
                accessToken: response.accessToken
            }
            setUserSession(userData);
            setUserData(userData);
            e.target.reset();
            navigate('/');
        }).catch(err => {
            isError(err)
            setIsPassword('');
        })
    }
    return (
        <section id="login-page" className="auth">
            <form onSubmit={onSubmit} id="login">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" value={isPassword} onChange={(e) => setIsPassword(e.target.value)} />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/users/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}