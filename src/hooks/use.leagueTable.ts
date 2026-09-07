import { useQuery } from "@tanstack/react-query";
import { leagueTable } from "../services/leagueTable";

export function useLeagueTable() {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["league-table"],
    queryFn: async () => {
      const data = leagueTable();
      return data;
    },
  });
  return {
    data,
    error,
    isError,
    isPending,
  };
}
