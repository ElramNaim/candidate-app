import { useQuery } from "@tanstack/react-query";
import { Candidate, Filters } from "../types/candidate";
import { fetchCandidates } from "../services/candidatesService";
import { filterCandidates } from "../utils/filterCandidates";

export const useCandidates = (filters: Filters) => {
  const {
    data: candidates,
    isLoading,
    isError,
  } = useQuery<Candidate[]>({
    queryKey: ["candidates"],
    queryFn: fetchCandidates,
    staleTime: 1000 * 60 * 5,
  });

  const filteredCandidates = filterCandidates(candidates || [], filters);

  return { filteredCandidates, isLoading, isError };
};
