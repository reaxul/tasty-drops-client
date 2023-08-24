import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuth from "../../../api/useAuth";

export const Profile = () => {
  const { logOut } = useAuth();
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <div className="p-3">
        <div className="flex items-center gap-2">
          <img className="w-10 rounded-full mr-2" src={user?.photoURL} alt="" />
          <span>
            <h1 className="font-medium">{user?.displayName}</h1>
            <p className="text-sm text-slate-600">Admin</p>
          </span>
        </div>
        <Link
          onClick={() => logOut()}
          to={"/"}
          className="flex items-center gap-2 ml-2 pt-5">
          <FiLogOut size={20} /> Log out
        </Link>
      </div>
    </>
  );
};
