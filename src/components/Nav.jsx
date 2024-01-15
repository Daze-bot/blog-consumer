/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Nav = (props) => {

  return (
    <nav>
      <div className="nav-logo">
        <Link to={'/'} onClick={props.navClick}>
          <p>Daze's</p>
          <p>Blog</p>
        </Link>
      </div>
      <div className="post-header">
        {props.currentPost}
      </div>
      <ul className="nav-links">
        <Link to={'/'} onClick={props.navClick}>
          <li>Posts</li>
        </Link>
        <Link to={'/about'} onClick={props.navClick}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
};

export default Nav;
