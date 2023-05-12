import { Suspense } from "react";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import { Routes, Route } from "react-router-dom";
import LayoutComponent from "../components/layout/LayoutComponent";
import HomePage from "../pages/homePage/HomePage";
import Course from "../pages/course/Course";
import OfflineClass from "../pages/OfflineClass";
import LoginPage from "../pages/loginPage/LoginPage";
import Dashboard from "../pages/dashboard/Dashboard"

const RouteManagement = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/course" element={<Course />} />
          <Route path="/offlineClass" element={<OfflineClass />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </LayoutComponent>
    </Suspense>
  );
};

export default RouteManagement;
