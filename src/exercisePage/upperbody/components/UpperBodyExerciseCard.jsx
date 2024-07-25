
import ReactPlayer from 'react-player/youtube'

const UpperBodyExerciseCard = ({
    props
}) => {
  return (
    <div className="flex flex-col gap-4 p-2  border border-grey-100 shadow-md rounded">
    <div className=" flex rounded gap-3 w-fit object-cover "> 
    <ReactPlayer width={400} height={300}  url={props.url} controls={true} light={true} />
<div className="flex flex-col">
<h1 className="text-xl font-bold">{props.title}</h1>
<p className="text-sm">
{props.description}
</p>

     </div>

    </div>
      
  </div>

  )
}

export default UpperBodyExerciseCard