import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content justify-between">
        <div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            AuthTest
          </Link>
        </div>
        <div>
          <Link to="/home" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
          <Link to="/orders" className="btn btn-ghost normal-case text-xl">
            Orders
          </Link>
          <Link to="/register" className="btn btn-ghost normal-case text-xl">
            Register
          </Link>
          {user?.email ? (
            <Link
              onClick={handleSignOut}
              to="/login"
              className="btn btn-ghost normal-case text-xl"
            >
              Log Out
            </Link>
          ) : (
            <Link to="/login" className="btn btn-ghost normal-case text-xl">
              Login
            </Link>
          )}
          <p>{user?.displayName}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
