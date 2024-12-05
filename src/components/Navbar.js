import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/MainPage">MainPage</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
