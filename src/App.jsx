import Features from "./Components/Features"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Pricing from "./Components/Pricing"
import Footer from "./Components/Footer"


function App() {

  return (
    <>
       <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/features" element={<Features/>}></Route>
            <Route path="/pricing" element={<Pricing/>}></Route>
          </Routes>
          <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
