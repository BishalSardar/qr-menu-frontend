import { Link, useLocation } from "react-router-dom";
import { SIDENAV_ITEMS, SideNavItem } from "./constant/sidebar-data";

const SideBar = () => {
  return (
    <div className="bg-white h-full rounded-r-3xl">
      <div className="flex flex-col h-full space-y-2 py-6 px-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 rounded-lg inset-y-0 z-50">
        {SIDENAV_ITEMS.map((item, idx) => {
          return (
            <div key={idx}>
              <MenuItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive =
    (pathname === "/admin/home" && item.path === "/admin/home") ||
    pathname === item.path ||
    (pathname?.startsWith(`${item.path}/`) && item.path.split("/").length >= 3);

  return (
    <div className="px-3">
      <Link
        to={item.path}
        className={`flex flex-row space-x-4 items-center p-5 rounded-lg ${
          isActive ? "bg-orange-500 hover:bg-gray-200" : "hover:bg-gray-200"
        }`}
      >
        <div className={`${isActive ? "font-bold text-white" : ""} `}>
          {item.icon}
        </div>
        <span className={`${isActive ? "font-bold text-white" : ""} xl:hidden`}>
          {item.title}
        </span>
      </Link>
    </div>
  );
};
