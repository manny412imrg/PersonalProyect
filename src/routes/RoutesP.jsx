import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import RootLayout from '../layout/RootLayout'
import Help from '../pages/Help'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element ={<Home/>}/>
      <Route path="about" element ={<About/>}/>
      <Route path="help" element ={<Help/>}>
        <Route path='faq'/>
        <Route path='contact'/>
      </Route >
    </Route>
  ))

const RoutesP = () => {
  return (
    <>
      <RouterProvider router={router} />  
    </>
  )
}
export default RoutesP