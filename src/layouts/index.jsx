import { Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <div className="px-52 py-24 w-full h-full">
        <Outlet />
    </div>

  )
  
}