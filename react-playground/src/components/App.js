import './App.css';

function HeaderBar() {
  return (
    <div className="HeaderBar" >
      <nav className="bg-gray-900">
        <div className="px-10 py-5 flex flex-row w-full">
          <h1 className="text-white text-2xl border-white border-2 w-1/3">Charles Welch</h1>
          <div className="Relative w-2/3">
              <a className="text-white border-2 border-white px-5 absolute right-40">Experience</a>
              <a className="text-white border-2 border-white px-5 absolute right-20">Projects</a>
              <a className="text-white border-2 border-white px-5 absolute right-0">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderBar;
