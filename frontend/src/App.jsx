import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddDoctorPage from "./pages/AddDoctorPage";
import DoctorListPage from "./pages/DoctorListPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-doctor" element={<AddDoctorPage />} />
        <Route path="/doctors" element={<DoctorListPage />} />
        <Route path="/book" element={<BookAppointmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;