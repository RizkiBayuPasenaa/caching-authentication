import { Outlet } from "react-router-dom"
import Navbar from "../components/layout/Navbar"

function MainLayouts() {
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center h-screen">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayouts;