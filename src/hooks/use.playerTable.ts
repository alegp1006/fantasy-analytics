import { useQuery } from "@tanstack/react-query";
import { leagueTable } from "../services/leagueTable";

export function usePlayerData() {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["table-data"],
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
