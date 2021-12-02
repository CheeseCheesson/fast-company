import React from "react";
import api from "../api";

export const Users = () => {
  const users = api.users.fetchAll();

  const userName = users[1].name;
  console.log(userName);
  const userProfessions = users[1].profession.name;
  console.log(userName + " " + userProfessions);

  const render = () => {};

  return (
    <>
    <h1> <span class="badge bg-primary">12 человек тусанёт с тобой сегодня</span></h1>
    <table class="table">
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
        <tr>
          <td>Джон Дориан</td>
          <td>
            <ul>
              <li className="btn btn-primary  btn-sm m-1">Нудила</li>
              <li className="btn btn-dark  btn-sm m-1">Неуверенный</li>
              <li className="btn btn-secondary  btn-sm m-1">Странный</li>
            </ul>
          </td>
          <td>Доктор</td>
          <td>38</td>
          <td>2.5/5</td>
          <td> <span className='btn btn-lg btn-danger'>delete</span></td>
        </tr>

      </tbody>
    </table>
  </>
  );
};
