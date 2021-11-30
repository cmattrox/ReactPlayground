import '../App.css';
import { Link } from 'react-router-dom';

function HeaderBar() {
  return (
    <div className="HeaderBar" >
      <nav className="bg-gray-900">
        <div className="px-10 py-5 flex flex-row w-full">
          <div className="pt-1">
            <svg class="h-6 w-6 text-center text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          </div>
          <h1 className="text-gray-300 text-2xl pl-5 w-2/3">Charles Welch</h1>
        <div className="w-1/3 divide-x divide-gray-300 grid grid-cols-4">
              <Link to="/" className="text-center text-gray-300">Home</Link>
              <Link to='/experience' className="text-center text-gray-300">Experience</Link>
              <Link to='/projects' className="text-center text-gray-300">Projects</Link>
              <Link to='/contact' className="text-center text-gray-300">Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderBar;