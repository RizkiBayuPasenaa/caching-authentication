import { Navigate, Outlet } from "react-router-dom";
import { useIsLogin } from "../store/isLogin";

function ProtectedRoute() {
  const isLogin = useIsLogin((state) => state.isLogin);

  if (!isLogin) return <Navigate to="/login" />;

  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRoute;
