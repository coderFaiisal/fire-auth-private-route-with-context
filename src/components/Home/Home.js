import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Home = () => {
    const {user} = useContext(AuthContext);
  return (
    <div>
      <p className="text-6xl">Login user email is : {user?.email}</p>
    </div>
  );
};

export default Home;
