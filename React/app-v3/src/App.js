import './App.css';
import Layout from './RoutingLesson/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './RoutingLesson/NotFound';
import ProductList from './RoutingLesson/ProductList';
import Product from './RoutingLesson/Product';
import { ProductProvider } from './context/ProductContext';
import Home from './RoutingLesson/Home';

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
