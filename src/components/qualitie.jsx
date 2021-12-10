import React from "react";

export const Qualitie = ({name, color}) => {

  const getBageClasses = (color) => {
    let bgColorQuality = "btn-sm m-1 text-white fw-bolder text-center btn-";
    bgColorQuality += color;
    return bgColorQuality;
  };
  return (
    <>
      <span className={getBageClasses(color)}>
         {name}
      </span>
    </>
  );
};
