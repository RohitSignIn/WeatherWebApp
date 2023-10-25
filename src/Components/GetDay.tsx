import React from "react";

export default function GetDay({ day }: { day: number }) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return <span>{weekdays[day]}</span>;
}
