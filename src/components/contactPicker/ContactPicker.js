import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select onChange={onChange}>
      <option key={-1} value={""} selected="selected">
        No Contact Selected
      </option>
      {contacts.map((contact, index) => {
        return (
          <option key={index} value={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
