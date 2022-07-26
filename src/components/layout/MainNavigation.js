import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorite-context";

const MainNavigation = () => {
  const favoritesContext = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites{" "}
              <span className={classes.badge}>
                {favoritesContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
