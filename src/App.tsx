import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Routes,Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import './App.css'

function App() {
 
  return ( 
     <Routes>
      <Route element={<NavBar />}>
        <Route path={"home"} element ={<Home/>}/>
        <Route path='movie/:id' element={<Details/>}/>
      </Route>
     </Routes>
    
  )
}

export default App
