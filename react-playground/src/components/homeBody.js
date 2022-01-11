import '../App.css'
import Nelson from '../images/IMG_2260.JPG'
import { homeInfo } from '../data/data'

const HomeBody = () => {
  return (
    <main>
      {homeInfo.map((item, idx) => (
        <div
          className="bg-gray-darker relative w-full h-full overflow-hidden pt-5 pb-5 flex justify-center"
          id="body"
        >
          <div className="bg-gray-lightest w-4/5 h-full pt-5 pb-10 rounded">
            <h1 className="text-gray-darkest text-center text-7xl">
              {item.header}
            </h1>
            <div className="pl-16 pt-10 flex flex-row grid grid-cols-3">
              <img
                src={Nelson}
                alt="Picture at the Nelson"
                className="h-60 rounded-full"
              ></img>
              <p className="pr-5 text-2xl col-span-2 leading-loose text-gray-darkest">
                {item.paragraph}
              </p>
            </div>
            <div className="flex flex-row grid grid-cols-3">
              <ul className="list-disc ml-16 mt-10 text-2xl mr-5 pl-2 list-inside text-gray-darkest rounded-lg col-span-1 border-4 border-gray-darkest">
                {item.skillsTitle}
                {item.skills.map(({ value }, idx) => (
                  <li className="text-xl">{value}</li>
                ))}
              </ul>
              <div className="mt-10 text-gray-darkest pr-2 mr-5 col-span-2 border-4 border-gray-darkest pl-2 rounded-lg border-solid">
                <p className="text-2xl">{item.recommendationTitle}</p>
                <p className="text-lg"> {item.recommendation}</p>
                <p className="pt-2 float-right">{item.job}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      ß
    </main>
  )
}

export default HomeBody
