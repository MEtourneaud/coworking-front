import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/guest/HomePage"
import CoworkingsPage from "./pages/guest/CoworkingsPage"
import CoworkingDetailsPage from "./pages/guest/CoworkingDetailsPage"
import DashboardPage from "./pages/admin/DashboardPage"
import LoginPage from "./pages/guest/LoginPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkings" element={<CoworkingsPage />} />
        <Route path="/coworkings/details/:coworkingId" element={<CoworkingDetailsPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
