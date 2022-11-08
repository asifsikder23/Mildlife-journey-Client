import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router/Router';

function App() {
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;