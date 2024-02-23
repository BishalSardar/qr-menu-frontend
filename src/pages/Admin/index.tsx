import { useLocation } from "react-router-dom";
import Home from "./Home";
import Stats from "./Stats";
import Cart from "./Cart";
import SideBar from "./_components/Sidebar";

const Admin = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="flex">
        <div className="hidden lg:block min-h-screen">
          <SideBar />
        </div>
        <div className="overflow-y-auto w-full">
          {pathname === "/admin/home" ? <Home /> : null}
          {pathname === "/admin/stats" ? <Stats /> : null}
          {pathname === "/admin/cart" ? <Cart /> : null}
        </div>
      </div>
    </div>
  );
};

export default Admin;
