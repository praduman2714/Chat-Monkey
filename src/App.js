import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import the Provider component from react-redux
import store from './store'; // Import the Redux store
import './App.css';
import NavBar from './Components/NavBar/Navbar';
import SingIN from './Components/SingIN/SingIn';
import SingUP from './Components/SingUp/SingUP';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar />,
      children: [
        {path : '/' , element : <Home />},
        { path: 'singIN', element: <SingIN /> },
        { path: 'singUP', element: <SingUP /> }
      ]
    }
  ]);

  return (
    <div className="App">
      {/* Wrap your application with the Provider component and pass the store */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
