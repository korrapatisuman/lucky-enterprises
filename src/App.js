import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VehicleList from "./pages/Vehicles/VehicleList";

import AddVehicle from "./pages/Vehicles/AddVehicle";
import EditVehicle from "./pages/Vehicles/EditVehicle";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import RealEstateDashboard from "./pages/RealEstate/RealEstateDashboard";
import PropertyList from "./pages/RealEstate/PropertyList";
import AddProperty from "./pages/RealEstate/AddProperty";
import EditProperty from "./pages/RealEstate/EditProperty";
import PropertyDetails from "./pages/RealEstate/PropertyDetails";
import LoanServices from "./pages/RealEstate/LoanServices";

import VehicleDashboard from "./pages/Vehicles/VehicleDashboard";
import BuyVehicles from "./pages/Vehicles/BuyVehicles";
import SellVehicle from "./pages/Vehicles/SellVehicle";
import VehicleDetails from "./pages/Vehicles/VehicleDetails";
import Bookings from "./pages/Vehicles/Bookings";

import BookTrip from "./pages/BookTrip";
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

function App() {
  return (
    <Router>
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/vehicles/add" element={<AddVehicle />} />
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/vehicles/edit/:id" element={<EditVehicle />} />
          <Route path="/book-trip" element={<BookTrip />} />
          
          <Route path="/vehicles-dashboard" element={<VehicleDashboard />} />
          <Route path="/vehicles/buy" element={<BuyVehicles />} />
          <Route path="/vehicles/sell" element={<SellVehicle />} />
          <Route path="/vehicles/details/:id" element={<VehicleDetails />} />
          <Route path="/vehicles/bookings" element={<Bookings />} />

          <Route path="/home-loan" element={<HomeLoanDashboard />} />
          <Route path="/home-loan/apply" element={<LoanApplicationForm />} />
          <Route path="/home-loan/calculator" element={<LoanCalculator />} />
          <Route path="/home-loan/loans" element={<LoanList />} />
          <Route path="/home-loan/status" element={<LoanStatus />} />
          
          <Route path="/consultancy" element={<ConsultancyDashboard />} />
          <Route path="/consultancy/services" element={<ConsultancyServices />} />
          <Route path="/consultancy/details/:id" element={<ConsultancyDetails />} />
          <Route path="/consultancy/enquiry" element={<ConsultancyEnquiry />} />
          
          <Route path="/admin/*" element={<AdminRoutes />} />
          
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/real-estate" element={<RealEstateDashboard />} />
          <Route path="/real-estate/properties" element={<PropertyList />} />
          <Route path="/real-estate/add-property" element={<AddProperty />} />
          <Route path="/real-estate/edit-property/:id" element={<EditProperty />} />
          <Route path="/real-estate/property/:id" element={<PropertyDetails />} />
          <Route path="/real-estate/loans" element={<LoanServices />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
