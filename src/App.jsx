import React, { useState } from "react";
import api from "./api/index";
import { Users } from "./components/users";
import { SearchStatus } from "./components/searchStatus";

export const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    const newState = users.filter((user) => user._id !== userId);
    setUsers(newState);
  };
  const hendleToggleBookMark = (id) => {
    const newIndex = users.findIndex(i => i._id === id)
    const newUser = [...users];
    if(newUser[newIndex].status){
      newUser[newIndex].status = false
    }else{
      newUser[newIndex].status = true
    }
    setUsers(newUser)
  };

  return (
    <>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        id={users._id}
        onToggle={hendleToggleBookMark}
        onDelete={handleDelete}
      />
    </>
  );
};
