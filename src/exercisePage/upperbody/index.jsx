
import UpperBodyExerciseCard from "./components/UpperBodyExerciseCard";


const UpperBodyExercise = () => {
  return (
    <div className="p-2 text-center">
        <h1 className="text-xl font-bold  mb-4">Upper Body Exercise</h1>
         <div className="flex flex-col gap-4">
         {upperBodyWorkout.map((workout) => (
            <UpperBodyExerciseCard key={workout.id} props={workout} />
          ))}
         </div>
    </div>
  )
}

export default UpperBodyExercise


const upperBodyWorkout = [
  {
    id: 1,
    title: "The Power Snatch",
    description: "Start the Bent Over Barbell Row with the feet underneath the hips while holding a barbell using a double overhand grip. Bur torso is roughly parallel to the floor. Contracting your lats will pull the bar until it makes contact with the sternum then slowly lower the bar to the starting position.",
    url: "https://youtu.be/TL8SMp7RdXQ?si=w6CINyrLc5lLJIIW",
    duration: "1:08",
    muscles: ["Latissimus Dorsi", "Trapezius", "Rectus Abdominis"]
  },
  {
    id: 2,
    title: "The Kettlebell Snatch",
    description: "The kettlebell snatch teaches the basics of powerful hip and leg extension, which is then transferred into the upper extremities. The position of the hips and spine, as well as the concept of midline stabilization under load, is shared with many other powerful lifts, such as the barbell deadlift, clean, and snatch.",
    url: "https://youtu.be/Pm-b2XFeABA?si=78tgIsvTGAOi0DWI",
    duration: "1:06",
    muscles: ["Rectus Abdominis", "Hamstrings", "Gastrocnemius", "Soleus"]
  },
  {
    id: 3,
    title: "Slam Ball",
    description: "Stand with your feet shoulder-width apart and hold a medicine ball in front of you. Bring your arms to your sides and then down, keeping them straight. As you lower your arms, lift the medicine ball off the ground and slam it back down to the ground.",
    url: "https://youtu.be/k9W6g9LvXDI?si=eVF9Mqa4UesnrTqH",
    duration: "00:50",
    muscles: ["Trapezius", "Rectus Abdominis", "Latissimus Dorsi"]
  },
  {
    id: 4,
    title: "Bench Press",
    description: "Powerlifting is the sport of three lifts: the bench press, squat, and deadlift. It is a superb start for a lifting program and can be followed later by the more dynamic clean and jerk and snatch.",
    url: "https://youtu.be/SCVCLChPQFY?si=XJAYuYlq2RcibqRb",
    duration: "00:55",
    muscles: ["Chest", "Triceps", "Back"]
  },
  {
    id: 5,
    title: "Back Squat",
    description: "Stand with feet set wider than shoulder-width and hold a dumbbell with both hands in front of your chest. Sit back into a squat, then drive back up and down",
    url: "https://youtu.be/QmZAiBqPvZw?si=VxWuVjQL9BzRheGr",
    duration: "1:00",
    muscles: ["Quadriceps", "Hamstrings", "Glutes", "Back"]
  }
]

