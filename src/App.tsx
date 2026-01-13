import { Home } from './pages/Home'
import { Favorite } from './pages/Favorite'
import { Details } from './pages/Details'
import { Routes,Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import './App.css'

function App() {
 
  return ( 
     <Routes>
      <Route element={<NavBar />}>
        <Route path={"/"} element ={<Home/>}/>
         <Route path={"favorite"} element ={<Favorite/>}/>
        <Route path='movie/:id' element={<Details/>}/>
      </Route>
     </Routes>
    
  )
}

export default App
