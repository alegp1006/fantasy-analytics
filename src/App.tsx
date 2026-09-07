import "./App.css";
import { useLeagueTable } from "./hooks/use.leagueTable";

function App() {
  const { data, error, isError, isPending } = useLeagueTable();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return <>{JSON.stringify(data)}</>;
}

export default App;
