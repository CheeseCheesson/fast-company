import React, { useState } from "react";
import api from "../api";

export const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {};
  const renderPhrase = (number) => {};
  const getBageClasses = (color) => {
    let bgColorQuality = "btn-sm m-1 text-white fw-bolder text-center btn-";
    bgColorQuality += color;
    return bgColorQuality;
  };

  return (
    <>
      <h1>
        {" "}
        <span className="badge bg-primary">
          12 человек тусанёт с тобой сегодня
        </span>
      </h1>
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
            <>
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
                  <span className="btn btn-lg btn-danger">delete</span>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};
