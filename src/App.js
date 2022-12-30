
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes/Routes';

function App() {
  return (
    <div className="bg-primary">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
