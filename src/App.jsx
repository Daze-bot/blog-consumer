import './styles/App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/Home';
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
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/posts/:pageID",
          element: <PostPage 
            setCurrentPost={setCurrentPost}
          />,
        }
      ]
    }
  ]);  

  return (
    <RouterProvider router={router} />
  )
};

export default App;
