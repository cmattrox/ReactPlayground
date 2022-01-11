import '../App.css'
import Nelson from '../images/IMG_2260.JPG'

function HomeBody() {
  return (
    <main>
      <div
        className="bg-gray-darker relative w-full h-full overflow-hidden pt-5 pb-5 flex justify-center"
        id="body"
      >
        <div className="bg-gray-lightest w-4/5 h-full pt-5 pb-10 rounded">
          <h1 className="text-gray-darkest text-center text-7xl">
            Hello, World!
          </h1>
          <div className="pl-16 pt-10 flex flex-row grid grid-cols-3">
            <img
              src={Nelson}
              alt="Picture at the Nelson"
              className="h-60 rounded-full"
            ></img>
            <p className="pr-5 text-2xl col-span-2 leading-loose text-gray-darkest">
              A young full-stack developer who is also a current computer
              science major enrolled in a broad spectrum of managing information
              systems classes. Experienced in assembly language programming and
              object-oriented design, with an emphasis on data structures and
              algorithm analysis.
            </p>
          </div>
          <div className="flex flex-row grid grid-cols-3">
            <ul className="list-disc ml-16 mt-10 text-2xl mr-5 pl-2 list-inside text-gray-darkest rounded-lg col-span-1 border-4 border-gray-darkest">
              {' '}
              Certified skills:
              <li className="text-xl">HTML</li>
              <li className="text-xl">CSS</li>
              <li className="text-xl">JavaScript</li>
              <li className="text-xl">PHP</li>
              <li className="text-xl">MySQL</li>
              <li className="text-xl">C++</li>
              <li className="text-xl">NodeJS</li>
              <li className="text-xl">ReactJS</li>
            </ul>
            <div className="mt-10 text-gray-darkest pr-2 mr-5 col-span-2 border-4 border-gray-darkest pl-2 rounded-lg border-solid">
              <p className="text-2xl">Received Recommendations:</p>
              <p className="text-lg">
                {' '}
                "I worked with Charles on multiple projects during our time in
                Bootcamp. He is a quick study and a willing teacher. Many times,
                I would reach out to him for an explanation of concepts and
                review of my code. During our projects, he demonstrated
                problem-solving and a team-first approach. For one project we
                collaborated to complete a full backend ourselves. Another
                project he took on the challenge of working multiple external
                APIs into the project seamlessly. From my experience
                collaborating with Charles, he has a strong grasp on full stack
                development concepts and has shown the ability to be an
                excellent communicator. When the “going got tough” during our
                projects, he dug in and hit deadlines. I’ve enjoyed my time
                collaborating with Charles and would work with him on future
                projects."
              </p>
              <p className="pt-2 float-right">
                -Senior Sales Engineer at AppDynamics
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomeBody
