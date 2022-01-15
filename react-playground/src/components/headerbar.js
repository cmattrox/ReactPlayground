import '../App.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

function HeaderBar() {
  return (
    <header className="HeaderBar z-0">
      <nav className="bg-gray-darkest">
        <div className="px-10 py-5 flex flex-row w-full">
          <div className="w-2/3 flex">
            <FontAwesomeIcon
              className="w-full h-full text-gray-lightest"
              icon={faLaptopCode}
              size="lg"
            />
            <h1 className="inline-block pt-1 align-middle h-full text-gray-lightest text-2xl pl-5">
              Charles Welch
            </h1>
          </div>
          <div className="w-1/3 divide-x-2 divide-gray-300 flex py-2 flex-row">
            <NavLink
              to="/ReactPlayground"
              className={({ isActive }) =>
                isActive
                  ? 'underline text-gray-lightest text-center px-5 text-xl'
                  : 'text-center px-5 text-gray-lightest text-xl'
              }
              exact
            >
              Home
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive
                  ? 'underline text-gray-lightest text-center px-5 text-xl'
                  : 'text-center px-5 text-gray-lightest text-xl'
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? 'underline text-gray-lightest text-center px-5 text-xl'
                  : 'text-center px-5 text-gray-lightest text-xl'
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'underline text-gray-lightest text-center px-5 text-xl'
                  : 'text-center px-5 text-gray-lightest text-xl'
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default HeaderBar
