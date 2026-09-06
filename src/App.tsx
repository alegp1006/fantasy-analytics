import "./App.css";
import { usePlayerData } from "./hooks/use.playerData";

function App() {
  const { data, error, isError, isPending } = usePlayerData("701154");

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return <>{JSON.stringify(data)}</>;
}

export default App;
