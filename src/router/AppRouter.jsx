import { Route, Routes } from "react-router-dom"
import Profesor from "../pages/Profesor"
import Home from "../pages/Home"


export const AppRouter = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profesor" element={<Profesor/>}/>
    </Routes>
  )
}