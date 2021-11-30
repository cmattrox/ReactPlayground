import '../App.css';
import { Link } from 'react-router-dom';

function HeaderBar() {
  return (
    <div className="HeaderBar" >
      <nav className="bg-gray-900">
        <div className="px-10 py-5 flex flex-row w-full">
          <h1 className="text-gray-300 text-2xl w-2/3">Charles Welch</h1>
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