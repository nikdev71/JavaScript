import './App.css';
import Layout from './RoutingLesson/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './RoutingLesson/NotFound';
import ProductList from './RoutingLesson/ProductList';
import Product from './RoutingLesson/Product';
import { ProductProvider } from './context/ProductContext';
import Home from './RoutingLesson/Home';
import Authorisation from './RoutingLesson/Authorisation';
import Login from './RoutingLesson/Login';
import Registration from './RoutingLesson/Registration';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:
          <ProductProvider>
            <Layout/>
          </ProductProvider> ,

      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/RoutingLesson',
          element: <ProductList/>
        },
        {
          path: '/RoutingLesson/product/:id',
          element: <Product />
        },
        {
          path: '*',
          element: <NotFound/>
        }
      ]
    },
    {
        path:'/auth',
        element : <Authorisation/>,
        children:[
          {
            path:'login',
            element : <Login/>,
          },
          {
            path:'reg',
            element : <Registration/>,
          }
        ]
    }
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
