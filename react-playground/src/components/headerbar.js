import '../App.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const HeaderBar = () => {
  const [showDisplay, setShowDisplay] = useState(false)

  return (
    <header className="HeaderBar z-0">
      <nav className="bg-gray-darkest">
        <div className="px-10 py-5  flex-row w-full flex">
          <div className="w-2/3 flex">
            <FontAwesomeIcon
              className="mt-1 text-gray-lightest"
              icon={faLaptopCode}
              size="lg"
            />
            <h1 className="text-gray-lightest text-2xl pl-2">Charles Welch</h1>
          </div>
          <div className="hidden lg:flex w-1/3 divide-x-2 divide-gray-300 py-2 flex-row">
            <NavLink
              to="/"
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
          <div className="w-1/3 lg:hidden">
            <div className="w-full flex justify-end">
              <FontAwesomeIcon
                icon={faBars}
                className="w-full h-full text-gray-lightest cursor-pointer"
                size="lg"
                onClick={() => setShowDisplay(!showDisplay)}
              />
            </div>
            {showDisplay && (
              <div className="flex flex-col w-full bg-gray-lightest rounded">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'underline text-gray-darkest text-center text-xl mx-2 py-2 border-b-2 border-gray-darkest'
                      : 'text-center mx-2 text-gray-darkest text-xl py-1 border-b-2 border-gray-darkest'
                  }
                  exact
                >
                  Home
                </NavLink>
                <NavLink
                  to="/experience"
                  className={({ isActive }) =>
                    isActive
                      ? 'underline mx-2 text-gray-darkest text-center  text-xl py-2 border-b-2 border-gray-darkest'
                      : 'text-center mx-2 text-gray-darkest text-xl py-1 border-b-2 border-gray-darkest'
                  }
                >
                  Experience
                </NavLink>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? 'underline text-gray-darkest text-center text-xl mx-2 py-2 border-b-2 border-gray-darkest'
                      : 'text-center text-gray-darkest text-xl mx-2 py-2 border-b-2 border-gray-darkest'
                  }
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? 'underline text-gray-darkest text-center text-xl mx-2 py-2'
                      : 'text-center text-gray-darkest text-xl mx-2 py-2'
                  }
                >
                  Contact
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default HeaderBar
