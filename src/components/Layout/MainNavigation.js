import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context';
import './MainNavigation.css';

function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext);
    return(
        <div className="main-navigation">
            <div className="container">
                <header className="header">
                    <h2 className="logo">React Meetups</h2>
                    <nav className="nav">
                        <ul className="nav-ul">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">All</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/new-meetups" className="nav-link">New</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/favorites" className="nav-link">
                                    My Favourite
                                    <span className="badge badge-light">{favoritesCtx.totalFavorites}</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>  
    )
}
export default MainNavigation;