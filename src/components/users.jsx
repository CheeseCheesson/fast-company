import react from "react";
import { User } from "./user";
import { SearchStatus } from "./searchStatus";
import BookMark from "./bookmark";

export const Users = ({ users, onDelete, onToggle, ...rest }) => {
  if(users.length > 0){
      return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item._id}>
            <User {...item}/>
            <BookMark onToggle={onToggle} {...item}/>
              <td>
                <span
                  className="btn btn-lg btn-danger"
                  onClick={() => onDelete(item._id)}>
                  delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
  } else {
    return (
      <SearchStatus/>
    )
  }

};
