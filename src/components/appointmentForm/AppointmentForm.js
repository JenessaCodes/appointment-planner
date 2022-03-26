import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        min={getTodayString}
        required
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
      />
      <ContactPicker
        contacts={getContactNames()}
        onChange={(e) => setContact(e.target.value)}
      />
      <input type="submit" value="Submit Appointment" />
    </form>
  );
};
