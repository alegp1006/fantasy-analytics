import { useQuery } from "@tanstack/react-query";
import { playerData } from "../services/playerData";

export function usePlayerData(playerId: string) {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["player-data", playerId],
    queryFn: async () => {
      const data = playerData(playerId);
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
