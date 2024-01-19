import './styles/App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Posts from './components/Posts';
import Nav from './components/Nav';
import PostPage from './components/PostPage';
import ErrorPage from './components/ErrorPage';
import About from './components/About';

const App = () => {
  const NavWrapper = () => {
    return (
      <div className='app'>
        <Nav />
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
          element: <Posts />,
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
