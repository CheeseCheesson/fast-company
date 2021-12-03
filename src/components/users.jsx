import React, { useState } from "react";
import api from "../api";
import friendlyPic from "../assets/specials.jpg";

export const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const getBageClasses = (color) => {
    let bgColorQuality = "btn-sm m-1 text-white fw-bolder text-center btn-";
    bgColorQuality += color;
    return bgColorQuality;
  };
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((item) => item._id !== userId));
  };
  const checkPerson = (number) => {
    switch (number) {
      case 4:
        return "человека";
      case 3:
        return "человека";
      case 2:
        return "человека";
      default:
        return "человек";
    }
  };

  const renderPhrase = (number) => {
    return (
      <>
        <span className="badge bg-primary">
          {number} {checkPerson(number)} тусанёт с тобой сегодня
        </span>
      </>
    );
  };

  if (users.length === 0) {
    return (
      <>
        <h1>
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
  return (
    <>
      <h1>{renderPhrase(users.length)}</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>
                {item.qualities.map((quality) => (
                  <span
                    className={getBageClasses(quality.color)}
                    key={quality._id}
                  >
                    {quality.name}
                  </span>
                ))}
              </td>
              <td>
                <span key={item.profession._id}>{item.profession.name}</span>
              </td>
              <td>{item.completedMeetings}</td>
              <td>{item.rate}</td>
              <td>
                <span
                  className="btn btn-lg btn-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
