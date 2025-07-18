import { Link } from "react-router-dom";

function NavigationBar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">E-Commerce Fun App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavigationBar