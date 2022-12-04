import React from "react";

const Appointment = ({ selected }: { selected: Date }) => {
  console.log(selected);
  return (
    <div>
      <h1>Appointment</h1>
      <h2>Selected Date: {String(selected)}</h2>
    </div>
  );
};

export default Appointment;
