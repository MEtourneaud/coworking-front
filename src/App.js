import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CoworkingsPage from "./pages/CoworkingsPage"
import CoworkingDetailsPage from "./pages/CoworkingDetailsPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkings" element={<CoworkingsPage />} />
        <Route path="/coworkings/details/:coworkingId" element={<CoworkingDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
