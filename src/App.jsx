import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./Components/HomePage"
import { MarkdownPage } from "./Components/MarkdownPage";
import { Marrkdon } from "./Components/Marrkdon";
function App() {
 
  const routes = createBrowserRouter([
    {
      path : "/",
      element : <HomePage/>
    },

    {
      path : "/markdowneditor",
      element : <MarkdownPage/>
    }
  ])

  return (
    <>
     <Marrkdon/>

      {/* <RouterProvider router = {routes}></RouterProvider> */}
      
    </>
  )
}

export default App
