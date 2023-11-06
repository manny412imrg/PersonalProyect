import { NavLink, Outlet } from 'react-router-dom'

export default function Help() {
  return (
    <>
        <div className='help-layout'>Help</div>
        <p>IVN HELP Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum quidem fuga, molestiae vitae, minima quae sit voluptatibus corrupti mollitia officiis tenetur quas error maxime aperiam, rem modi assumenda! Similique!</p>
        <nav>
            <NavLink to='faq'>View the FaQ </NavLink>
            <NavLink to='contact'>Contact us </NavLink>
        </nav>
        
        <Outlet/>

    </>
  )
}
