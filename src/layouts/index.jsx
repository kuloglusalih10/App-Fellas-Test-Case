import { Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <div className="px-52 py-16 w-full h-full overflow-hidden">
        <Outlet />
    </div>

  )
  
}