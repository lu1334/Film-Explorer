import { Home } from './pages/Home'
import { Favorite } from './pages/Favorite'
import { Category } from './pages/Category'
import { Details } from './pages/Details'
import { Routes,Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { MovieByCategory } from './pages/MovieByCategory'
import './App.css'

function App() {
 
  return ( 
     <Routes>
      <Route element={<NavBar />}>
        <Route path={"/"} element ={<Home/>}/>
         <Route path={"favorite"} element ={<Favorite/>}/>
        <Route path='movie/:id' element={<Details/>}/>
        <Route path='category' element={<Category/>}/>
        <Route path='category/:id' element={<MovieByCategory/>}/>
      </Route>
     </Routes>
    
  )
}

export default App
