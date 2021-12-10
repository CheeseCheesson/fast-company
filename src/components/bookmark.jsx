import React from "react";

const BookMark = ({ status, onToggle, _id, ...rest }) => {
  //  console.log({status, onToggle, ...rest});
  if (status) {
    return (
      <td onClick={() => onToggle(_id)}>
        <i className="bi bi-circle-fill" style={{color: '#0d6efd'}}></i>
      </td>
    );
  }
  return (
    <td onClick={() => onToggle(_id)}>
      <i className="bi bi-circle"></i>
    </td>
  );
};

export default BookMark;
