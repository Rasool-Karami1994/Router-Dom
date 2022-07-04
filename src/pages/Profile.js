import SideBar from "../components/SideBar";
import Downloads from "../components/Downloads";
import Dashboard from "../components/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
//we use useNavigate hook insted of usehistory in v5
const Profile = () => {
  const navigate = useNavigate();
  const redirector = (e) => {
    navigate("/");
  };
  return (
    <div className="profile">
      <h2>this is your profile!</h2>
      <div className="profile-body">
        <SideBar />
        <div className="right-side">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="downloads" element={<Downloads />} />
          </Routes>
          <button onClick={redirector}>Go to home</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
