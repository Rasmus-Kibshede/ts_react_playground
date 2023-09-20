import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import NavMenu from './components/Menu/NavMenu'


// React routing tutorial
// https://www.youtube.com/watch?v=2aumoR0-jmQ&ab_channel=TheNerdyCanuck

const App = () => {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "pokedex",
  //     element: <Pokedex />
  //   },
  // ]);


  return (
    <>
      {/* <NavMenu></NavMenu>
      <RouterProvider router={router} /> */}

      <BrowserRouter>
        <NavMenu></NavMenu>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='pokedex'>
            <Route index element={<Pokedex />}></Route>
            <Route path=':string' element={<Pokedex />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App