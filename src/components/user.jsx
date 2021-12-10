import React from "react";
import { Qualitie } from "./qualitie";
export const User = ({name, qualities, profession, completedMeetings, rate}) => {
  return (
    <>
      <td>{name}</td>
      <td>
        {qualities.map((quality) => (
          <Qualitie key={quality._id} {...quality} />
        ))}
      </td>
      <td>
        <span key={profession._id}>{profession.name}</span>
      </td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
    </>
  );
};
