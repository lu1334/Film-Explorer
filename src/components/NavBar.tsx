import { Link, Outlet } from "react-router-dom";

export const NavBar = ()=>{
  return (
    <div className="app-shell">
      <nav className="side-nav">
        <ul className="side-nav__list">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"favorite"}>Favorite</Link>
          </li>
          <li>
            <Link to={"categori"}>Category</Link>
          </li>
        </ul>
      </nav>
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}
