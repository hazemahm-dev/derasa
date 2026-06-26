import { Routes, Route } from "react-router-dom";
import { SchoolAdminDashboard } from "../components/SchoolAdminDashboard/SchoolAdminDashboard";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<SchoolAdminDashboard />} />
    </Routes>
  );
}
