
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingTestPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hours, setHours] = useState(1);
  const pricePerHour = 30;

  const handleBooking = () => {
    alert(`Test Booking Confirmed! Date: ${selectedDate}, Hours: ${hours}, Total: RM${hours * pricePerHour}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>Test Booking System</h1>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '300px' }}>
        <label>Select Date & Time:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          dateFormat="Pp"
          style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
        />
        <label>Select Hours:</label>
        <input
          type="number"
          min="1"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
        />
        <p>Total Price: <strong>RM{hours * pricePerHour}</strong></p>
        <button onClick={handleBooking} style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Confirm Test Booking</button>
      </div>
    </div>
  );
};

export default BookingTestPage;
