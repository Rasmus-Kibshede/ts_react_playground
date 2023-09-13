import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import NavMenu from './components/Menu/NavMenu'


// React routing tutorial
// https://www.youtube.com/watch?v=2aumoR0-jmQ&ab_channel=TheNerdyCanuck

const App = () => {
  return (
    <>

      <BrowserRouter>
        <NavMenu></NavMenu>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='pokedex' element={<Pokedex />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App