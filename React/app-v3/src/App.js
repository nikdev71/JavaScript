import './App.css';
import Layout from './RoutingLesson/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './RoutingLesson/NotFound';
import Home from './RoutingLesson/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          path: '/',
          element: <Layout/>
        },
        {
          path: '/RoutingLesson',
          element: <Home/>
        },
        {
          path: '*',
          element: <NotFound/>
        },
      ]
    },
  ])
  return (
    <>
    <h1>Router</h1>
    <RouterProvider router={router}/>
    {/* <Form/> */}
    {/* <ImageFilter/> */}
    </>
  );
}

export default App;
