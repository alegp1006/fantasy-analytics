import { useQuery } from "@tanstack/react-query";
import { playerNews } from "../services/playerNews";

export function usePlayerNews(playerId: string) {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["player-news", playerId],
    queryFn: async () => {
      const data = playerNews(playerId);
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
