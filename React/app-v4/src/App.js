import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { CardDetails } from './Mafia/MafiaCardDetails';
import { MafiaList } from './Mafia/MafiaList';
import NotFound from './Mafia/NotFound';
import { MafiaContextProvider } from './Mafia/MafiaContext';
import Layout from './Mafia/Layout';
import Rules from './Mafia/Rules';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MafiaContextProvider><Layout/></MafiaContextProvider>
      ,

      children: [
        {
          path: '/',
          element: <Rules/>
        },
        {
          path: '/Mafia',
          element: <MafiaList/>
        },
        {
          path: '/Mafia/card/:id',
          element: <CardDetails />
        },
        {
          path: '*',
          element: <NotFound/>
        }
      ]
    },
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
