import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

import UserList from "./users/UserList";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";

import RoleList from "./roles/RoleList";
import AddRole from "./roles/AddRole";
import EditRole from "./roles/EditRole";

import EnquiryList from "./enquiries/EnquiryList";

import BusinessSettings from "./settings/SiteSettings";
import CmsPages from "./settings/ProfileSettings";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />

      {/* Users */}
      <Route path="users" element={<UserList />} />
      <Route path="users/add" element={<AddUser />} />
      <Route path="users/edit/:id" element={<EditUser />} />

      {/* Roles */}
      <Route path="roles" element={<RoleList />} />
      <Route path="roles/add" element={<AddRole />} />
      <Route path="roles/edit/:id" element={<EditRole />} />

      {/* Enquiries */}
      <Route path="enquiries" element={<EnquiryList />} />

      {/* Settings */}
      <Route path="settings/business" element={<BusinessSettings />} />
      <Route path="settings/cms" element={<CmsPages />} />
    </Routes>
  );
}

export default AdminRoutes;
