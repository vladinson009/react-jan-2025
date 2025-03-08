import { NavLink } from "react-router-dom"
import { useContext } from "react";
import context from "../../context/userContext";

function isActive({ isActive }) {
    return { color: isActive && "rgb(82, 133, 139)" }

}
export default function Header() {
    const { userSession } = useContext(context)


    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1><NavLink style={isActive} className="home" to="/">GamesPlay</NavLink></h1>
            <nav>
                <NavLink style={isActive} to="/games/catalogue">All games</NavLink>
                {userSession?.accessToken
                    ? <div id="user">
                        {/* <!-- Logged-in users --> */}
                        <NavLink style={isActive} to="/games/create">Create Game</NavLink>
                        <NavLink style={isActive} to="/users/logout">Logout</NavLink>
                    </div>
                    : <div id="guest">
                        {/* <!-- Guest users --> */}
                        <NavLink style={isActive} to="/users/login">Login</NavLink>
                        <NavLink style={isActive} to="/users/register">Register</NavLink>
                    </div>}


            </nav>
        </header>

    )
}