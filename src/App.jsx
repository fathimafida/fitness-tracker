import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'sonner'
import FitnessHomePage from './home/components'
import UpperBodyExercise from './exercisePage/upperbody'
import LowerBodyExecise from './exercisePage/lowerbody'


function App() {
  

  return (
    <>
      <Toaster  richColors/>
      <div>
        <Routes>
          <Route path="/" element={<FitnessHomePage />} ></Route>
          <Route path='/upperbody' element={<UpperBodyExercise />} ></Route>
          <Route path='/lowerbody' element={<LowerBodyExecise />} ></Route>
          
        </Routes>
      </div>
    </>
  )
}

export default App
