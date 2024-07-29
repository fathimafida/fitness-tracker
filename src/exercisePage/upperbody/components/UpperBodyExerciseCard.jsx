import ReactPlayer from 'react-player/youtube'

const UpperBodyExerciseCard = ({ props }) => {
  return (
    <div className="flex flex-col gap-6 p-4 border border-gray-200 shadow-lg rounded-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-row gap-4">
        <div className="flex-shrink-0 w-1/2">
          <ReactPlayer
            className="rounded object-cover w-full border"
            url={props.url}
            controls={true}
            light={true}
          />
        </div>
        <div className="flex flex-col flex-grow">
          <h1 className="text-2xl font-bold mb-3 text-gray-800">{props.title}</h1>
          <p className="text-md text-slate-500 mb-5">{props.description}</p>
          <div className="flex items-center mb-5">
            <p className="text-md font-bold text-gray-800 mr-2">Duration:</p>
            <p className="text-md text-slate-600">{props.duration}</p>
          </div>
          <ul className="list-disc  list-inside  ">Muscles
            {props.muscles.map((muscle) => (
              <li key={muscle} className="text-md mb-2 text-gray-600 hover:text-slate-900 transition-colors duration-300">
                {muscle}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


export default UpperBodyExerciseCard
