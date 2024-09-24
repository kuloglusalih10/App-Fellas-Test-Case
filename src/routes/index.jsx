import { createBrowserRouter } from "react-router-dom"
import HomeLayout from "../layouts/HomeLayout";
import Home from "../screens/Home";
import Books from "../screens/Books"
import BookLayout from "../layouts/BooksLayout"
import NotFound from "../screens/NotFound"

const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        
      ]
    },
    {
      path: '/books',
      element: <BookLayout/>,
      children:[
        {
          path: '/books',
          element: <Books />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound/>
    }
  ])
  
  export default routes