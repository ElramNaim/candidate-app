import { Candidate, Filters } from "../types/candidate";

export const filterCandidates = (
  candidates: Candidate[],
  filters: Filters,
): Candidate[] => {
  return candidates.filter((c) => {
    const matchName = c.name.toLowerCase().includes(filters.name.toLowerCase());

    const matchPosition = !filters.position || c.position === filters.position;

    const matchStatus = !filters.status || c.status === filters.status;

    const matchYears =
      filters.yearsOfExperience === "" ||
      c.yearsOfExperience >= Number(filters.yearsOfExperience);

    return matchName && matchPosition && matchStatus && matchYears;
  });
};
