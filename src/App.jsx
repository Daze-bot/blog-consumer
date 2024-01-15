import './styles/App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Posts from './components/Posts';
import Nav from './components/Nav';
import PostPage from './components/PostPage';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import { useState } from 'react';

const App = () => {
  const [currentPost, setCurrentPost] = useState(null);

  const handleNavClick = () => {
    setCurrentPost(null);
  }

  const NavWrapper = () => {
    return (
      <div className='app'>
        <Nav 
          currentPost={currentPost}
          navClick={handleNavClick}
        />
        <Outlet />
      </div>
    )
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavWrapper />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Posts 
            setCurrentPost={setCurrentPost}
          />,
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/posts/:postID",
          element: <PostPage />,
        }
      ]
    }
  ]);  

  return (
    <RouterProvider router={router} />
  )
};

export default App;
