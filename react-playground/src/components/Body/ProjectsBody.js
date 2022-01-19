import '../../App.css'
import Carousel from '../Carousel'

function ProjectsBody() {
  return (
    <main>
      <div
        className="bg-gray-darker relative w-full h-full pt-5 md:pb-5 flex justify-center"
        id="body"
      >
        <div className="bg-gray-lightest w-4/5 h-full pt-5 rounded pb-2">
          <h1 className="text-gray-darkest text-center text-7xl">Projects</h1>
          <Carousel />
        </div>
      </div>
    </main>
  )
}

export default ProjectsBody
