import { useQuery } from "@tanstack/react-query";
import { searchPlayer } from "../services/searchPlayer";

export function useSearchPlayer(playerName: string) {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["search-player", playerName],
    queryFn: async () => {
      const data = await searchPlayer(playerName);
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
