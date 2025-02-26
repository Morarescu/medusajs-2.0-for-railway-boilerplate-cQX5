"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Heading, Button, Calendar } from "@medusajs/ui";

const BookingPage: React.FC = () => {
  const router = useRouter();
  const [date, setDate] = useState<Date | null>(null);

  const handleBooking = () => {
    if (!date) return;
    alert(`You booked: ${date.toDateString()}`);
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <Heading level="h1" className="text-3xl font-bold">
        Select a Date for Your Appointment
      </Heading>

      {/* Medusa UI Calendar */}
      <div className="p-4 border rounded-md shadow-md">
        <Calendar value={date} onChange={setDate} />
      </div>

      <Button variant="primary" onClick={handleBooking} disabled={!date}>
        Confirm Booking for {date ? date.toDateString() : "Select a date"}
      </Button>
    </div>
  );
};

export default BookingPage;
