import '../../App.css'
import Carousel from '../Carousel'

function ProjectsBody() {
  return (
    <main>
      <div
        className="bg-gray-darker relative w-full h-screen overflow-hidden pt-5 flex justify-center pb-5"
        id="body"
      >
        <div className="bg-gray-lightest w-4/5 h-full pt-5 rounded">
          <h1 className="text-gray-darkest text-center text-7xl">Projects</h1>
          <Carousel />
        </div>
      </div>
    </main>
  )
}

export default ProjectsBody
