import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route/Router';

function App() {
  return (
    <div className="font">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
