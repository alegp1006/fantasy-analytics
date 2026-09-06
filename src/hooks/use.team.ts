import { useQuery } from "@tanstack/react-query";
import { team } from "../services/team";

export function useTeam({ teamId }: { teamId: string }) {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ["team", teamId],
    queryFn: async () => {
      const data = await team(teamId);
      return data;
    },
    staleTime: 1000,
  });

  return {
    data,
    error,
    isError,
    isPending,
  };
}
