import { createBrowserRouter } from 'react-router-dom'
import { Post } from './pages/Post';
import { Blog } from './pages/Blog';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Blog />,
  },
  {
    path: '/post',
    element: <Post />,
  }
]);