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
import Faq from '../pages/help/Faq'
import Contact from '../pages/help/Contact'
import { NotFount } from '../pages/NotFount'
import Careers, { careersLoader } from '../pages/Careers/Careers'
import { CarrersLayout } from '../layout/CarrersLayout'
import CareerDetail from '../pages/Careers/CareerDetail'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<RootLayout/>}>
      <Route index element ={<Home/>}/>
      <Route path="about" element ={<About/>}/>
      <Route path="help" element ={<Help/>}>
        <Route path='faq'element={<Faq/>}/>
        <Route path='contact'element={<Contact/>}/>
      </Route >
      <Route path="carerrs" element ={<CarrersLayout/>}>
        <Route 
          index 
          element={<Careers/>}
          loader={careersLoader}
        />
        <Route
          path=":id"
          element={<CareerDetail/>}
        />
      </Route >
        <Route path='*' element={<NotFount/>}/>
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