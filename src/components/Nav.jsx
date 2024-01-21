/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <nav>
      <div className="nav-logo">
        <Link to={'/'}>
          <p>Daze's</p>
          <p>Blog</p>
        </Link>
      </div>
      <ul className="nav-links">
        <Link to={'/'}>
          <li>Posts</li>
        </Link>
      </ul>
    </nav>
  )
};

export default Nav;
