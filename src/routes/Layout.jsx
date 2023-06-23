import style from "./layout.module.css"

import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <div className={style["layout"]}>
      <header className={style["navbar"]}>
        <div>
       LOGO
        </div>

        <nav>
          <ul className={style["navigation-links"]}>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
            <li>
              <Link to="/projects" >Projects</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={style["main"]}>
        <Outlet />
      </main>

      <footer className={style["footer"]}>
        <h2>
          &copy; Thomas P
        </h2>
      </footer>
    </div>
  )
}