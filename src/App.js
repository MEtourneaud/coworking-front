import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/guest/HomePage"
import CoworkingsPage from "./pages/guest/CoworkingsPage"
import CoworkingDetailsPage from "./pages/guest/CoworkingDetailsPage"
import DashboardPage from "./pages/admin/DashboardPage"
import LoginPage from "./pages/guest/LoginPage"
import AdminCoworkingsPage from "./pages/admin/AdminCoworkingsPage"
import AdminCoworkingsCreate from "./pages/admin/AdminCoworkingCreate"
import AdminCoworkingUpdate from "./pages/admin/AdminCoworkingUpdate"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkings" element={<CoworkingsPage />} />
        <Route path="/coworkings/details/:coworkingId" element={<CoworkingDetailsPage />} />

        <Route path="/login" element={<LoginPage />} />

        {/* Routes Admin */}
        <Route path="/admin/" element={<DashboardPage />} />
        <Route path="/admin/coworkings" element={<AdminCoworkingsPage />} />
        <Route path="/admin/coworkings/create" element={<AdminCoworkingsCreate />} />
        <Route path="/admin/coworkings/update/:coworkingId" element={<AdminCoworkingUpdate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
