import { Candidate } from "../types/candidate";

const BASE_URL = "http://localhost:3001";

export const fetchCandidates = async (): Promise<Candidate[]> => {
  const res = await fetch(`${BASE_URL}/candidates`);
  if (!res.ok) throw new Error("Failed to fetch candidates");
  return res.json();
};
