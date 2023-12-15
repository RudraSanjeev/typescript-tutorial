import React, { useState } from "react";

type userType = {
  name: string;
  sessionId: number;
};

const page = () => {
  const [username, setUserName] = useState("");
  const [user, setUser] = useState<userType | null>(null);

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <div className="login">
      {!user?.name ? (
        <form>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => handleChange(e)}
          />
          <button onClick={handleLogin}>login</button>
        </form>
      ) : (
        `${user.name} is logged in !`
      )}
    </div>
  );
};

export default page;
