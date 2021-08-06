import React, { useContext } from "react";
import Link from "next/link";

// import FavoritesContext from "../../store/favorites-context";

import style from "./MainNavigation.module.css";

function MainNavigation() {
  // const favoriteCtx = useContext(FavoritesContext);
  return (
    <header className={style.header}>
      <div className={style.logo}>Let us Meetup</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link href="/favorites">
              Favorites
              {/* <span className={style.badge}>{favoriteCtx.totalFavorites}</span> */}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
