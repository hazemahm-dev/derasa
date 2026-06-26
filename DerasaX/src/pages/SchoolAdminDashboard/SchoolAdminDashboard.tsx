import React from "react";
import "./SchoolAdminDashboard.css";

interface SchoolAdminDashboardProps {
  // Add your props here
}

export const SchoolAdminDashboard: React.FC<SchoolAdminDashboardProps> = (
  props
) => {
  return (
    <div className="school-admin-dashboard">
      <h1>School Admin Dashboard</h1>
      {/* Add your dashboard content here */}
    </div>
  );
};
