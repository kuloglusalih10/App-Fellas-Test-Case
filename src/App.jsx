import './App.css'
import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './stores';

function App() {
  
  return (
    <Provider store={store}>  
      <RouterProvider router={routes}/>
    </Provider>
  )
}

export default App
