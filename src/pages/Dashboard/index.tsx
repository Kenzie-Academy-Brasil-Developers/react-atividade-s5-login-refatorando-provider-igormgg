import { useAuth } from "../../providers/Auth";
import { DashboardContainer } from "./styles";

const Dashboard = () => {
  const { Logout } = useAuth();

  return (
    <DashboardContainer>
      <button onClick={Logout}>Sair</button>
    </DashboardContainer>
  );
};

export default Dashboard;
