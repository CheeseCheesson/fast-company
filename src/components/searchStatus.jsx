import React from "react";
import friendlyPic from "../assets/specials.jpg";

export const SearchStatus = ({ length }) => {
  const checkPerson = (number) => {
    if (number > 4 && number < 15) return "человек тусанёт";
    const stringNum = String(number);
    const lastSymbol = +stringNum.slice(-1);
    if ([2, 3, 4].indexOf(lastSymbol) >= 0) return "человека тусанyт";
    return "человек тусанёт";
  };

  const renderPhrase = (number) => {
    if (number === 0) {
      return (
        <>
          <h1
            style={{
              position: "absolute",
              width: 50 + "%",
              height: 50 + "%",
              top: 0,
              right: "auto",
              bottom: 0,
              textAlign: "center",
            }}
          >
            <span className="badge bg-danger">Никто с тобой не тусанёт</span>
          </h1>
          <img
            src={friendlyPic}
            className="img-fluid"
            alt="pic"
            style={{
              minWidth: 100 + "%",
              maxHeight: 100 + "vh",
              overflowY: "hidden",
            }}
          />
        </>
      );
    }
    if (number > 0) {
      return (
        <span className="badge bg-primary">
          {number} {checkPerson(number)} с тобой сегодня
        </span>
      );
    }
  };

  return (
    <>
      <h1>{renderPhrase(length)}</h1>
    </>
  );
};
