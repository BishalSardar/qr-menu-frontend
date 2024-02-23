import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import SideBar from "../Sidebar";
import Search from "../SearchBox";

const MainNav = () => {
  return (
    <div className="flex justify-between items-center px-5 sm:px-10 py-2">
      <div>
        <Link to="/admin/home">
          <h1 className="text-lg lg:text-3xl font-black text-orange-500 tracking-tight">
            QR Menu
          </h1>
        </Link>
        <span className="text-sm text-gray-400">
          Date:{" "}
          {new Date().toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>
      <div className="flex gap-7 items-center">
        <div className="hidden lg:block">
          <Search />
        </div>
        <Link to="/admin/cart" className="xl:hidden">
          <Badge count={5}>
            <ShoppingCart />
          </Badge>
        </Link>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <SideBar />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
