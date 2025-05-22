import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

export default function MainAppRouter() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}
