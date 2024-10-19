import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from "../pages/SignUp/signUp";
import { projectRoutes } from "./constant";
import SignIn from "../pages/SignIn/signIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import PageNotFound from "../pages/pageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { RootState } from "../Service/store";

interface PrivateRouteProps {
  component: React.FC;
  path: string;
  exact?: boolean;
}

const AppRoutes = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return (
    <>
      <Routes>
        <Route path={`*`} element={<PageNotFound />} />
        <Route path={projectRoutes.signUp} element={<SignUp />} />
        <Route path={projectRoutes.signIn} element={<SignIn />} />
        <Route
          path={projectRoutes.dashbord}
          element={
            token ? <Dashboard /> : <Navigate to={projectRoutes.signIn} />
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default AppRoutes;
