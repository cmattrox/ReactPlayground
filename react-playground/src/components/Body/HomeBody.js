import '../../App.css'
import Nelson from '../../images/IMG_2260.JPG'
import { homeInfo } from '../../data/data'

const HomeBody = () => {
  return (
    <main>
      {homeInfo.map((item, idx) => (
        <div
          className="bg-gray-darker relative w-full h-full pt-5 md:pb-5 flex justify-center"
          id="body"
        >
          <div className="bg-gray-lightest w-4/5 h-max pt-5 md:pb-10 rounded">
            <h1 className="text-gray-darkest text-center text-7xl">
              {item.header}
            </h1>
            <div className="md:pl-16 pt-10 md:flex">
              <img
                src={item.img}
                alt="Picture at the Nelson"
                className="h-30 md:h-60 rounded-full"
              ></img>
              <p className="px-5 text-2xl leading-loose text-gray-darkest">
                {item.paragraph}
              </p>
            </div>
            <div className="md:flex">
              <ul className="list-disc md:ml-16 mt-10 text-2xl md:mr-5 md:px-4 list-inside text-gray-darkest rounded-lg border-4 border-gray-darkest">
                <div className="font-semibold">{item.skillsTitle}</div>
                {item.skills.map(({ value }, idx) => (
                  <li className="text-xl">{value}</li>
                ))}
              </ul>
              <div className="md:mt-10 text-gray-darkest md:pr-2 md:mr-5 border-4 border-gray-darkest pl-4 rounded-lg border-solid">
                <p className="text-2xl font-semibold">
                  {item.recommendationTitle}
                </p>
                <p className="text-lg"> {item.recommendation}</p>
                <p className="pt-2 md:float-right">{item.job}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}

export default HomeBody
