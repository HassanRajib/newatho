import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import SIgnup from "./pages/SIgnup"
import Login from "./pages/Login"
import Landing from "./pages/Landing"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path='/signup' element={<SIgnup/> }></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
