import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'sonner'
import FitnessHomePage from './features/common/pages/Fitness/FitnessHomePage'


function App() {
  

  return (
    <>
      <Toaster  richColors/>
      <div>
        <Routes>
          <Route path="/" element={<FitnessHomePage />} ></Route>
          
        </Routes>
      </div>
    </>
  )
}

export default App
