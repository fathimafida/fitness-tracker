import LowerBodyExercises from "./components/LowerBodyExercises"


const LowerBodyExecise = () => {
  return (
    <div className="p-2 text-center">
        <h1 className="text-xl font-bold  mb-4">Upper Body Exercise</h1>
         <div className="flex flex-col gap-4">
       {lowerBodyWorkout.map((exercise) => (
         <LowerBodyExercises key={exercise.id} props={exercise} />
       ))}
         </div>
    </div>
  )
}

export default LowerBodyExecise

const lowerBodyWorkout = [
  {
    id: 1,
    title: "Squat",
    description: "Stand with your feet shoulder-width apart and lower your body until your thighs are parallel to the floor. Push through your heels to return to the starting position.",
    url: "https://youtu.be/ultWZbUMPL8?si=H4sbim8F3Jq9Od3b",
    duration: "1:15",
    muscles: ["Quadriceps", "Hamstrings", "Glutes"]
  },
  {
    id: 2,
    title: "Lunge",
    description: "Step forward with one leg and lower your hips until both knees are bent at about a 90-degree angle. Keep your front knee directly above your ankle. Push back to the starting position and repeat on the other side.",
    url: "https://youtu.be/QOVaHwm-Q6U?si=FjIb1uUJltgUt1gJ",
    duration: "1:00",
    muscles: ["Quadriceps", "Hamstrings", "Glutes", "Calves"]
  },
  {
    id: 3,
    title: "Deadlift",
    description: "Stand with your feet hip-width apart, holding a barbell with an overhand grip. Bend at the hips and knees to lower the barbell, then stand back up by straightening your hips and knees.",
    url: "https://youtu.be/op9kVnSso6Q?si=4gU0ou5hzwpEtCO2",
    duration: "1:10",
    muscles: ["Hamstrings", "Glutes", "Lower Back"]
  },
  {
    id: 4,
    title: "Calf Raise",
    description: "Stand with your feet shoulder-width apart and lift your heels off the ground, then slowly lower them back down.",
    url: "https://youtu.be/wRJKT99zMmI?si=OMY_Y1VgPfAOR88u",
    duration: "0:45",
    muscles: ["Calves"]
  },
  {
    id: 5,
    title: "Leg Press",
    description: "Sit on a leg press machine with your feet shoulder-width apart on the platform. Push the platform away from you by straightening your legs, then slowly lower it back to the starting position.",
    url: "https://youtu.be/IZxyjW7MPJQ?si=9x8fUw5ot5_KZhaW",
    duration: "1:05",
    muscles: ["Quadriceps", "Hamstrings", "Glutes"]
  }
]
