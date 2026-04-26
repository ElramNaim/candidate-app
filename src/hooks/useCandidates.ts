import { useQuery } from "@tanstack/react-query";
import { Candidate, Filters } from "../types/candidate";
import { fetchCandidates } from "../services/candidatesService";

export const useCandidates = (filters: Filters) => {
  const { data } = useQuery<Candidate[]>({
    queryKey: ["candidates"],
    queryFn: fetchCandidates,
    staleTime: 1000 * 60 * 5,
  });

  const filteredCandidates = (data ?? []).filter((c) => {
    const matchName = c.name.toLowerCase().includes(filters.name.toLowerCase());

    const matchPosition = !filters.position || c.position === filters.position;

    const matchStatus = !filters.status || c.status === filters.status;

    const matchYears =
      filters.yearsOfExperience === "" ||
      c.yearsOfExperience >= Number(filters.yearsOfExperience);

    return matchName && matchPosition && matchStatus && matchYears;
  });

  return { filteredCandidates };
};
