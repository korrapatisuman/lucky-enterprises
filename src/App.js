import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import VehicleList from "./pages/Vehicles/VehicleList";
import AddVehicle from "./pages/Vehicles/AddVehicle";
import EditVehicle from "./pages/Vehicles/EditVehicle";
import VehicleDashboard from "./pages/Vehicles/VehicleDashboard";
import BuyVehicles from "./pages/Vehicles/BuyVehicles";
import SellVehicle from "./pages/Vehicles/SellVehicle";
import VehicleDetails from "./pages/Vehicles/VehicleDetails";
import Bookings from "./pages/Vehicles/Bookings";

import BookTrip from "./pages/BookTrip";

import RealEstateDashboard from "./pages/RealEstate/RealEstateDashboard";
import PropertyList from "./pages/RealEstate/PropertyList";
import AddProperty from "./pages/RealEstate/AddProperty";
import EditProperty from "./pages/RealEstate/EditProperty";
import PropertyDetails from "./pages/RealEstate/PropertyDetails";
import LoanServices from "./pages/RealEstate/LoanServices";

import HomeLoanDashboard from "./pages/HomeLoan/HomeLoanDashboard";
import LoanApplicationForm from "./pages/HomeLoan/LoanApplicationForm";
import LoanCalculator from "./pages/HomeLoan/LoanCalculator";
import LoanList from "./pages/HomeLoan/LoanList";
import LoanStatus from "./pages/HomeLoan/LoanStatus";

import ConsultancyDashboard from "./pages/Consultancy/ConsultancyDashboard";
import ConsultancyServices from "./pages/Consultancy/ConsultancyServices";
import ConsultancyDetails from "./pages/Consultancy/ConsultancyDetails";
import ConsultancyEnquiry from "./pages/Consultancy/ConsultancyEnquiry";

import AdminRoutes from "./modules/admin/AdminRoutes";

import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

import "./styles/global.css";
import "./styles/layout.css";
import "./styles/pages.css";


// ---------------- PROTECTED ROUTE ---------------- //
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("authToken");
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) setUser(true);
  }, []);

  return (
    <Router>
      <Header user={user} setUser={setUser} />

      <div className="page-container">
        <Routes>

          {/* DEFAULT PAGE → LOGIN */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* PUBLIC ROUTES */}
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />

          {/* DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* VEHICLE MODULE */}
          <Route
            path="/vehicles"
            element={
              <ProtectedRoute>
                <VehicleList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/vehicles/add"
            element={
              <ProtectedRoute>
                <AddVehicle />
              </ProtectedRoute>
            }
          />

          <Route
            path="/vehicles/edit/:id"
            element={
              <ProtectedRoute>
                <EditVehicle />
              </ProtectedRoute>
            }
          />

          <Route
            path="/vehicles-dashboard"
            element={
              <ProtectedRoute>
                <VehicleDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/vehicles/buy"
            element={
              <ProtectedRoute>
                <BuyVehicles />
              </ProtectedRoute>
            }
          />

          <Route
            path="/vehicles/sell"
            element={
              <ProtectedRoute>
                <SellVehicle />
              </ProtectedRoute>
            }
          />

          <Route
            path="/vehicles/details/:id"
            element={
              <ProtectedRoute>
                <VehicleDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/vehicles/bookings"
            element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            }
          />

          <Route
            path="/book-trip"
            element={
              <ProtectedRoute>
                <BookTrip />
              </ProtectedRoute>
            }
          />

          {/* REAL ESTATE */}
          <Route
            path="/real-estate"
            element={
              <ProtectedRoute>
                <RealEstateDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/real-estate/properties"
            element={
              <ProtectedRoute>
                <PropertyList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/real-estate/add-property"
            element={
              <ProtectedRoute>
                <AddProperty />
              </ProtectedRoute>
            }
          />

          <Route
            path="/real-estate/edit-property/:id"
            element={
              <ProtectedRoute>
                <EditProperty />
              </ProtectedRoute>
            }
          />

          <Route
            path="/real-estate/property/:id"
            element={
              <ProtectedRoute>
                <PropertyDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/real-estate/loans"
            element={
              <ProtectedRoute>
                <LoanServices />
              </ProtectedRoute>
            }
          />

          {/* HOME LOAN */}
          <Route
            path="/home-loan"
            element={
              <ProtectedRoute>
                <HomeLoanDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/home-loan/apply"
            element={
              <ProtectedRoute>
                <LoanApplicationForm />
              </ProtectedRoute>
            }
          />

          <Route
            path="/home-loan/calculator"
            element={
              <ProtectedRoute>
                <LoanCalculator />
              </ProtectedRoute>
            }
          />

          <Route
            path="/home-loan/loans"
            element={
              <ProtectedRoute>
                <LoanList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/home-loan/status"
            element={
              <ProtectedRoute>
                <LoanStatus />
              </ProtectedRoute>
            }
          />

          {/* CONSULTANCY */}
          <Route
            path="/consultancy"
            element={
              <ProtectedRoute>
                <ConsultancyDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/consultancy/services"
            element={
              <ProtectedRoute>
                <ConsultancyServices />
              </ProtectedRoute>
            }
          />

          <Route
            path="/consultancy/details/:id"
            element={
              <ProtectedRoute>
                <ConsultancyDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/consultancy/enquiry"
            element={
              <ProtectedRoute>
                <ConsultancyEnquiry />
              </ProtectedRoute>
            }
          />

          {/* ADMIN */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminRoutes />
              </ProtectedRoute>
            }
          />

          <Route path="/contacts" element={<Contacts />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
