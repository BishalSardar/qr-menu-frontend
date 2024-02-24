import { useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";
import Stats from "./Stats";
import Cart from "./Cart";
import SideBar from "./_components/Sidebar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "@/core/constant/base_url";
import toast from "react-hot-toast";

const Admin = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/getUser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
        setIsAuthenticating(true);
      } catch (error) {
        toast.error("Please login first");
        navigate("/signin");
      }
    };

    fetchData();
  }, [navigate, token]);

  if (!isAuthenticating) {
    return <div>Loading...</div>;
  }

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
