import React, { useState } from "react";
import Appointment from "./Appointment/Appointment";
import Calenderhero from "./Calenderhero/Calenderhero";

const Schedule = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <Calenderhero
        selected={selected}
        setSelected={setSelected}
      ></Calenderhero>
      <Appointment selected={selected}></Appointment>
    </div>
  );
};

export default Schedule;
