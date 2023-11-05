import { NavLink, Outlet } from "react-router-dom"

 export default function RootLayout() {
   return (
     <div className="root-Layout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="about"> About </NavLink>
        </nav>  
      </header> 
      <main>
        <Outlet />
      </main>
     </div>
   )
 }
 