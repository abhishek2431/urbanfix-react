import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileContactBar from "./MobileContactBar";
import BookingModal from "./BookingModal";
import CityPickerModal from "./CityPickerModal";
import CityNotice from "./CityNotice";

/**
 * Layout holds everything that must stay consistent across every route:
 * the navbar, footer, mobile contact bar, and the booking / city-picker
 * modals. Each page reaches these through Outlet context instead of
 * duplicating the state itself.
 */
export default function Layout() {
  const [selectedCity, setSelectedCity] = useState("Indore");
  const [bookingService, setBookingService] = useState(undefined); // undefined = closed, null = generic request, object = specific service
  const [cityPickerOpen, setCityPickerOpen] = useState(false);
  const [cityNotice, setCityNotice] = useState(null);

  useEffect(() => {
    if (!cityNotice) return;
    const timer = setTimeout(() => setCityNotice(null), 2600);
    return () => clearTimeout(timer);
  }, [cityNotice]);

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setCityNotice(city);
  };

  const openBooking = (service) => setBookingService(service ?? null);
  const closeBooking = () => setBookingService(undefined);
  const openCityPicker = () => setCityPickerOpen(true);
  const closeCityPicker = () => setCityPickerOpen(false);

  const outletContext = {
    selectedCity,
    onSelectCity: handleSelectCity,
    onOpenCityPicker: openCityPicker,
    onBookService: openBooking,
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900">
      <Navbar selectedCity={selectedCity} onOpenCityPicker={openCityPicker} onBookAPro={() => openBooking(null)} />

      <main>
        <Outlet context={outletContext} />
      </main>

      <Footer onRequestTechnician={() => openBooking(null)} />
      <MobileContactBar onBookAPro={() => openBooking(null)} />

      {bookingService !== undefined && (
        <BookingModal service={bookingService} selectedCity={selectedCity} onClose={closeBooking} />
      )}

      {cityPickerOpen && (
        <CityPickerModal selectedCity={selectedCity} onSelectCity={handleSelectCity} onClose={closeCityPicker} />
      )}

      {cityNotice && <CityNotice city={cityNotice} />}
    </div>
  );
}
