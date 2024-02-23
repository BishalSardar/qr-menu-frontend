import { Navigate, Route, Routes } from "react-router-dom";
import CustomerHomePage from "./pages/Customer";
import SignIn from "./pages/Auth/SignIn";
import Admin from "./pages/Admin";
import { ToastProvider } from "./components/providers/toast-provider";

const AppRoutes = () => {
  return (
    <>
      <ToastProvider />
      <Routes>
        <Route path="/" element={<CustomerHomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin/home" element={<Admin />} />
        <Route path="/admin/stats" element={<Admin />} />
        <Route path="/admin/cart" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
