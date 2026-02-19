import { useReducer } from "react";
import {Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import BookingPage from "./pages/BookingPage";
import {fetchAPI, submitAPI} from './api';
import ConfirmedBooking from "./components/ConfirmedBooking";
import { initializeTimes, updateTime } from "./utility/timeReducer";

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTime, [], initializeTimes);
  const navigate = useNavigate();

  function submitForm(formData) {
    const success = submitAPI(formData);
    if (success) {
      localStorage.setItem("booking", JSON.stringify(formData));
      navigate('/confirmedBooking');
    }
  }

  return (
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
      <Route path="/confirmedBooking" element={<ConfirmedBooking /> } />
    </Routes>
  )
}

export default Main;