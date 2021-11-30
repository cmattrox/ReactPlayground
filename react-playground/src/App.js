import './App.css';
import Home from './components/home';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import Error from './components/error';

function App() {
  return (
    <main>
      <Swtich>
        <Route path='/' component={Home} exact/>
        <Route path='/experience' component={Experience} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />
      </Swtich>
    </main>
  )
}

export default HeaderBar;
