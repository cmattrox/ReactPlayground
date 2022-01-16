import '../../App.css'
import { experienceInfo } from '../../data/data'

function ExperienceBody() {
  return (
    <main>
      <div
        className="bg-gray-darker relative w-full h-screen overflow-hidden pt-5 pb-5 flex justify-center"
        id="body"
      >
        <div className="bg-gray-lightest w-4/5 h-full pt-5 pb-10  rounded">
          <h1 className="text-gray-darkest text-center text-7xl text-gray-darkest">
            {experienceInfo[0].header}
          </h1>
          {experienceInfo[0].experience.map(
            ({ title, time, description }, idx) => (
              <div
                id="idx"
                className="py-10 border-gray-darkest border-b-2 m-2"
              >
                <div className="grid grid-cols-2 px-5">
                  <p className="text-xl font-semibold text-gray-darkest">
                    {title}
                  </p>
                  <p className="text-xl place-self-end text-gray-darkest">
                    {time}
                  </p>
                </div>
                <p className="px-5 pt-5 text-gray-darkest text-lg">
                  {description}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </main>
  )
}

export default ExperienceBody
