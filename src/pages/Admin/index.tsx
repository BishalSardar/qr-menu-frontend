import { useLocation } from "react-router-dom";
import MainNav from "./_components/MainNav";
import Home from "./Home";
import Stats from "./Stats";
import Cart from "./Cart";
import SideBar from "./_components/Sidebar";

const Admin = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="bg-slate-100">
      {/* <div className="flex h-full">
        <div className="flex bg-white">
          <SideBar />
        </div>
        <div className="flex flex-col min-h-screen">
          <MainNav />
          <div className="flex-grow px-5">
            {pathname === "/admin/home" ? <Home /> : null}
            {pathname === "/admin/stats" ? <Stats /> : null}
            {pathname === "/admin/cart" ? <Cart /> : null}
          </div>
        </div>
      </div> */}
      <div className="flex">
        <div className="hidden lg:block">
          <SideBar />
        </div>
        <div className="w-full">
          <div className="flex flex-col min-h-screen">
            <MainNav />
            <div className="flex-grow px-5 sm:px-10">
              {pathname === "/admin/home" ? <Home /> : null}
              {pathname === "/admin/stats" ? <Stats /> : null}
              {pathname === "/admin/cart" ? <Cart /> : null}
            </div>
          </div>
        </div>
        <div className="w-[50%] hidden xl:block">c</div>
      </div>
    </div>
  );
};

export default Admin;
