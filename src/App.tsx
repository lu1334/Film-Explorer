import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
 
  return ( 
     <Routes>
      <Route index element ={<Home/>}/>
      <Route path='movie/:id' element={<Details/>}/>
     </Routes>
    
  )
}

export default App
