import { Link } from "react-router-dom"

function Menu() {
    return (
        <div className="navbar shadow-sm bg-blue-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="lightblue"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm  dropdown-content bg-white text-blue-400 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link to="/calculator">Book a room</Link>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/" className="btn btn-ghost text-xl text-blue-300">Guesthouse</Link>
            </div>
            <div className="navbar-end text-white">
                <Link to="/bookings" className="btn btn-ghost bg-blue-300">Bookings</Link>
                <Link to="/new-room-type" className="btn btn-ghost bg-blue-300">New Room Type</Link>
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="lightblue"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                </button>
                <Link to="/login" className="btn btn-ghost mx-5 bg-blue-500">Login</Link>
                <Link to="/register" className="btn btn-ghost bg-blue-200">Register</Link>
            </div>
        </div>
    )
}

export default Menu