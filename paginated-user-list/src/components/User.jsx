import React, { useState, useEffect } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const totalPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate pagination range
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + 2);
  if (endPage - startPage < 2) {
    startPage = Math.max(1, endPage - 2);
  }

  return (
    <div className="" >
      <h2 className="text-center my-5 dec">USERS LIST</h2>
      <div className="d-flex justify-content-around my-5 p-box">
        {currentUsers.map((user) => (
          <div key={user.id} className="box bg-white px-5 py-3 rounded-5 my-5 text-center">
            <img className="my-3 border rounded-5 " src={user.image} alt={user.name} />
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        ))}
      </div>
      <div className="">
      <div className="text-center my-5">
        <button className="btn btn-success mx-3" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        {[...Array(endPage - startPage + 1)].map((_, index) => (
          <button 
            className="btn border-0"
            key={startPage + index} 
            onClick={() => goToPage(startPage + index)} 
            style={{ fontWeight: currentPage === startPage + index ? "bold" : "normal" }}
          >
            {startPage + index}
          </button>
        ))}
        <button className="btn btn-success mx-3" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default UsersList;