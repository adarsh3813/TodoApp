import { useNavigate } from "react-router-dom";
import { NAV_LOGO } from "../constants";
import { useUser } from "../utils/userContext";

const Header = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handelLogoutClick = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="p-2 flex justify-between bg-blue-400">
      <div className="w-20 px-2">
        <img src={NAV_LOGO} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          {user ? (
            <>
              <li className="px-3">Home</li>
              <li className="px-3">All Todos</li>
              <li className="px-3" onClick={handelLogoutClick}>
                Logout
              </li>
            </>
          ) : (
            <li className="px-3" onClick={handleLoginClick}>
              Login
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
