import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <nav className="navbar-content">
                    <div className="logo">Rate My Dorms</div>
                    <ul>
                        <li><NavLink to="/" className={({isActive}) => isActive ? 'navlink_active' : 'navlink'}>Home</NavLink></li>
                        <li><NavLink to="/write-review" className={({isActive}) => isActive ? 'navlink_active' : 'navlink'}>Write Review</NavLink></li>
                        <li><NavLink to="/about" className={({isActive}) => isActive ? 'navlink_active' : 'navlink'}>About</NavLink></li>
                    </ul>
                    <div className="login-button"><button>Log In</button></div>
                </nav>
            </nav>
        </>
    )
}

export default Navbar;