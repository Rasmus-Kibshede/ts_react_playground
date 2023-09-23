import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import NavMenu from './components/Menu/NavMenu'
import { PokemonInfo } from './pages/PokemonInfo/PokemonInfo'


// React routing tutorial
// https://www.youtube.com/watch?v=2aumoR0-jmQ&ab_channel=TheNerdyCanuck

const App = () => {

  return (
    <>

      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='pokedex'>
            <Route index element={<Pokedex />}></Route>
            <Route path=':name' element={<PokemonInfo />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App