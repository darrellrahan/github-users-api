import React, { useEffect, useState } from "react";

function App() {
  let [users, setUsers] = useState([]);

  const getAPI = async () => {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div className="container">
      <h1>GitHub Users API</h1>
      {users.map((user, index) => (
        <div key={index} className="user">
          <img src={user.avatar_url} alt="avatar" />
          <div className="text-wrap">
            <h3>{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
