import { NavLink } from "react-router-dom"

function isActive({ isActive }) {
    console.log(isActive);

    return { color: isActive && "rgb(82, 133, 139)" }

}
export default function Header() {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1><NavLink style={isActive} className="home" to="/">GamesPlay</NavLink></h1>
            <nav>
                <NavLink style={isActive} to="/games/catalogue">All games</NavLink>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <NavLink style={isActive} to="/games/create">Create Game</NavLink>
                    <NavLink style={isActive} to="/users/logout">Logout</NavLink>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <NavLink style={isActive} to="/users/login">Login</NavLink>
                    <NavLink style={isActive} to="/users/register">Register</NavLink>
                </div>
            </nav>
        </header>

    )
}