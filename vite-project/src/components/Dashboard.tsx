import Assets from "../components/Assets";
import Gateways from "./Gateways";
import Anchors from "../components/Anchors";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Assets />
      <Gateways />
      <Anchors />
    </div>
  );
}

export default Dashboard;
